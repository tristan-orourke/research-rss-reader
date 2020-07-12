<script>
  export let item;

  let showTagForm = false;
  let tags = [];
  let newTag = "";

  const toggleAddForm = () => {
    showTagForm = !showTagForm;
  };
  function focus(el) {
    el.focus();
  }
  const saveTag = async () => {
    const {feed, ...coreItem} = item;
    const body = {
      item: coreItem,
      feedUrl: feed.link,
      tags: [...tags, newTag]
    };
    const {savedItem} = await fetch("api/items/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(r => r.json());
    tags = savedItem.tags;
    toggleAddForm();
  }
</script>

<style>
  .item {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
  .item-head {
    display: flex;
    flex-direction: row;
  }
  .item-feed {
    padding-right: 20px;
  }
  .item-link {
    flex: 1;
    padding-right: 20px;
  }
  .item-content {
    padding-top: 10px;
  }
  .item-date {
  }
</style>

<div class="item">
  <div class="item-head">
    <div class="item-feed">
      <a href={item.feed.link}>{item.feed.title}</a>
    </div>
    <a class="item-link" href={item.link}>{item.title}</a>
    <div class="item-date"> {new Date(item.isoDate).toLocaleString()} </div>
    {#if showTagForm}
      <div class="add-tag">
        <button on:click={toggleAddForm}>Cancel</button>
        <input
          use:focus
          class="tag-input"
          type="text"
          bind:value={newTag}
          on:keyup={e => e.key === "Enter" && saveTag()} />
        <button on:click={saveTag}>Save</button>
      </div>
    {:else}
      <div>
        <button on:click={toggleAddForm}>+</button>
      </div>
    {/if}
  </div>
  <details class="item-content">
    <summary>{item.contentSnippet.slice(0, 20)}</summary>
    {@html item.content}
  </details>
  <ul>
    {#each tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
</div>