<script>
  import { onMount } from "svelte";
  import { writable } from 'svelte/store';
  import Article from "../components/Article.svelte";
  import { fetchRssFeeds } from "../helpers/rss";

  let showAddForm = false;
  let rssUrl = "http://export.arxiv.org/rss/cs.AI";
  let feedsContent = [];

  const createFeedUrls = () => {
    const { subscribe, set, update } = writable([]);
    return {
      subscribe,
      add: (url) => update(ls => [url, ...ls]),
      delete: (url) => update(ls => ls.filter(x => x !== url))
    }
  }
  const feedUrls = createFeedUrls()
  
  const refreshFeeds = async () => {
    const feeds = await fetchRssFeeds($feedUrls);
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
  const addRssToList = () => {
    showAddForm = false;
    return feedUrls.add(rssUrl);
  };
  const removeFromList = url => {
    return feedUrls.delete(url);
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
      {#each $feedUrls as feed}
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