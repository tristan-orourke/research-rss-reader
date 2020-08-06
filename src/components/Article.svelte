<script>
  export let item;

  $: tags = item.tags || [];

  let showTagForm = false;
  let newTag = "";

  const toggleAddForm = () => {
    showTagForm = !showTagForm;
  };
  function focus(el) {
    el.focus();
  }
  async function addNewTag() {
    addTag(newTag);
    toggleAddForm();
    newTag = "";
  }
  const addTag = async tag => {
    const tagSet = new Set(tags);
    tagSet.add(tag);
    saveTags([...tagSet]);
  };
  const removeTag = async removedTag => {
    const tagSet = new Set(tags);
    tagSet.delete(removedTag);
    saveTags([...tagSet]);
  };
  async function toggleTag(tag) {
    tags.includes(tag) ? removeTag(tag) : addTag(tag);
  }
  const saveTags = async newTags => {
    const { feed, ...coreItem } = item;
    const body = {
      item: coreItem,
      feedUrl: feed.link,
      tags: newTags
    };
    const { savedItem } = await fetch("api/items/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(r => r.json());
    if (savedItem.tags !== undefined) {
      tags = savedItem.tags;
    }
  };

  const statusTags = {
    toRead: "status/toRead",
    finished: "status/finished"
  };
  const STATUS_CONSTANTS = {
    new: {
      current: "New!",
      action: "Save",
      style: "status-button-new",
      actionIcon: "fa-bookmark-o"
    },
    toRead: {
      current: "Saved",
      action: "Finish",
      style: "status-button-toread",
      actionIcon: "fa-book"
    },
    finished: {
      current: "Finished",
      action: "Restart",
      style: "status-button-finished",
      actionIcon: "fa-repeat"
    }
  };
  function computeStatus(currentTags) {
    if (currentTags.includes(statusTags.finished)) {
      return STATUS_CONSTANTS.finished;
    } else if (currentTags.includes(statusTags.toRead)) {
      return STATUS_CONSTANTS.toRead;
    } else {
      return STATUS_CONSTANTS.new;
    }
  }
  $: currentStatus = computeStatus(tags);
  function cycleStatus() {
    let newTags;
    if (tags.includes(statusTags.toRead)) {
      newTags = [
        statusTags.finished,
        ...tags.filter(e => e !== statusTags.toRead)
      ];
    } else if (tags.includes(statusTags.finished)) {
      newTags = [
        statusTags.toRead,
        ...tags.filter(e => e !== statusTags.finished)
      ];
    } else {
      newTags = [statusTags.toRead, ...tags];
    }
    saveTags(newTags);
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
  .item-status {
    padding-right: 20px;
  }
  .item-link {
    flex: 1;
    padding-right: 20px;
  }
  .item-content {
    padding-top: 10px;
  }
  .status-button-new {
    background-color: lightgreen;
    padding: 3px 8px;
    border-radius: 25%;
  }
  .status-button-toread {
    background-color: darkorange;
    padding: 3px 8px;
    border-radius: 25%;
  }
  .status-button-finished {
    background-color: aqua;
    padding: 3px 8px;
    border-radius: 25%;
  }
  .tag-form {
    float: right;
  }
  .tag-list {
    display: flex;
    flex-direction: row;
  }
  .tag-item {
    padding-right: 20px;
  }
</style>

<div class="item">
  <div class="item-head">
    <!-- <div class="item-feed">
      <a href={item.feed.link}>{item.feed.title}</a>
    </div> -->
    <div class={`item-status`}>
      <p class={currentStatus.style}>{currentStatus.current}</p>
    </div>
    <a class="item-link" href={item.link}>{item.title}</a>
    <div>
      <button on:click={cycleStatus} title={currentStatus.action}>
        <i class={`fa ${currentStatus.actionIcon}`} aria-hidden="true" />
      </button>
    </div>
  </div>
  <div>
    <div class="tag-form">
      {#if showTagForm}
        <div class="add-tag">
          <button on:click={toggleAddForm}>Cancel</button>
          <input
            use:focus
            class="tag-input"
            type="text"
            bind:value={newTag}
            on:keyup={e => e.key === 'Enter' && addNewTag()} />
          <button on:click={addNewTag}>Save</button>
        </div>
      {:else}
        <div>
          <button on:click={toggleAddForm}>+</button>
        </div>
      {/if}
    </div>
  </div>
  <details class="item-content">
    <summary>{item.contentSnippet.slice(0, 20)}</summary>
    {@html item.content}
  </details>
  <ul class="tag-list">
    {#each tags as tag}
      <li class="tag-item">{tag}</li>
    {/each}
  </ul>
</div>
