<script>
  import { onMount } from "svelte";
  import Article from "../components/Article.svelte";
  import { fetchRssFeeds, reconcileItems } from "../helpers/rss";
  import idbStorage from "../storage/idbStorage";
  import TagFilter from "../components/TagFilter.svelte";
  import Nav from "../components/Nav.svelte";
  import { isEmpty } from "../helpers/arrays";

  let showAddForm = false;
  let rssUrl = "http://export.arxiv.org/rss/cs.AI";
  let feedsContent = [];

  let storage = null;
  let feedUrls = [];

  let tags = [];
  let selectedTags = [];
  let untaggedSelected = true;

  $: filteredItems = filterItems(feedsContent, selectedTags, untaggedSelected);

  onMount(async () => {
    // indexedDB is only available in the browser
    storage = idbStorage();
    feedUrls = await storage.feedList();
    refreshFeeds();
  });

  const refreshFeeds = async () => {
    const feeds = await fetchRssFeeds(feedUrls);
    const liveItems = feeds
      .map((feed) => {
        const { items, ...feedMeta } = feed;
        return items.map((item) => ({ ...item, feed: feedMeta }));
      })
      .reduce((acc, val) => acc.concat(val), []);
    const savedItems = await storage.getAllItems();
    // TODO: could improve performance slightly by awaiting live and saved feeds together with Promise.all().
    feedsContent = reconcileItems(liveItems, savedItems).sort(
      (a, b) => new Date(b.isoDate) - new Date(a.isoDate)
    );
    refreshTags();
  };

  function refreshTags() {
    let newTags = [];
    feedsContent.forEach((item) => {
      item.tags &&
        item.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            newTags = [tag, ...newTags];
          }
        });
    });
    tags = [...newTags, ...tags];
    selectedTags = [...newTags, ...selectedTags];
  }

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
  const removeFromList = async (url) => {
    const removed = await storage.deleteFeed(url);
    if (removed) {
      feedUrls = feedUrls.filter((oldUrl) => oldUrl !== url);
    }
  };

  function setSelectedTags(tags) {
    selectedTags = tags;
  }
  function setUntaggedSelected(selected) {
    untaggedSelected = selected;
  }

  function filterItems(items, tags, untaggedAllowed) {
    return items.filter((item) => {
      return (
        (untaggedAllowed && isEmpty(item.tags)) ||
        (item.tags && item.tags.some((tag) => tags.includes(tag)))
      );
    });
  }
</script>

<style>
  .container {
    display: flex;
  }
  .side-bar {
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
  <div class="side-bar">
    <button on:click={toggleAddForm}>Add</button>
    <ul>
      {#each feedUrls as feed}
        <li>
          {feed}
          <button on:click={() => removeFromList(feed)}>Remove</button>
        </li>
      {/each}
    </ul>
    <TagFilter
      {tags}
      {selectedTags}
      {setSelectedTags}
      {untaggedSelected}
      {setUntaggedSelected} />
  </div>
  <div class="articles">
    <div class="articles-actions">
      <button on:click={refreshFeeds}>Reload</button>
    </div>
    <div class="articles-list">
      {#each filteredItems as item (item.link)}
        <Article {item} handleRefreshTags={refreshFeeds} />
      {/each}
    </div>
  </div>
</div>
