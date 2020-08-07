<script>
  import { onMount } from "svelte";
  import { writable } from 'svelte/store';
  import Article from "../components/Article.svelte";
  import { fetchRssFeeds } from "../helpers/rss";
  import idbStorage from "../storage/idbStorage";

  let showAddForm = false;
  let rssUrl = "http://export.arxiv.org/rss/cs.AI";
  let feedsContent = [];

  let storage = null;
  let feedUrls = [];

  onMount(async () => {
    // indexedDB is only available in the browser
    console.log(idbStorage);
    storage = idbStorage();
    feedUrls = await storage.feedList();
    refreshFeeds();
  });
  
  const refreshFeeds = async () => {
    const feeds = await fetchRssFeeds(feedUrls);
    feedsContent = feeds
      .map(feed => {
        const { items, ...feedMeta } = feed;
        return items.map(item => ({ ...item, feed: feedMeta }));
      })
      .reduce((acc, val) => acc.concat(val), [])
      .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
  };
  const toggleAddForm = () => {
    showAddForm = !showAddForm;
  };
  const addRssToList = async () => {
    showAddForm = false;
    const added = await storage.addFeed(rssUrl);
    if (added) {
      feedUrls = [rssUrl, ...feedUrls];
    }
  };
  const removeFromList = async url => {
    const removed = await storage.deleteFeed(url);
    if (removed) {
      feedUrls = feedUrls.filter(oldUrl => oldUrl !== url);
    }
  };
</script>

<style>
  .container {
    display: flex;
  }
  .feed-list {
    display: flex;
    padding: 10px;
    flex-direction: column;
  }
  .articles {
    display: flex;
    flex: 1;
    padding: 10px;
    flex-direction: column;
  }
  .add-feed {
    display: flex;
  }
  .feed-input {
    flex: 1;
  }
  .articles-actions {
    display: flex;
  }
</style>

<svelte:head>
  <title>Sapper RSS Reader</title>
</svelte:head>

{#if showAddForm}
  <div class="add-feed">
    <button on:click={toggleAddForm}>Cancel</button>
    <input
      class="feed-input"
      type="text"
      placeholder="http://rss.feed.com"
      bind:value={rssUrl} />
    <button on:click={addRssToList}>Add</button>
  </div>
{/if}

<div class="container">
  <div class="feed-list">
    <button on:click={toggleAddForm}>Add</button>
    <ul>
      {#each feedUrls as feed}
        <li>
           {feed}
          <button on:click={() => removeFromList(feed)}>Remove</button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="articles">
    <div class="articles-actions">
      <button on:click={refreshFeeds}>Reload</button>
    </div>
    <div class="articles-list">
      {#each feedsContent as item}
        <Article {item} />
      {/each}
    </div>
  </div>
</div>