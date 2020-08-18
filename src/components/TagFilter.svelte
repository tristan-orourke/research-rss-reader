<script>
  import { sort } from "../helpers/arrays";

  export let tags;
  export let selectedTags;
  export let setSelectedTags;
  export let untaggedSelected;
  export let setUntaggedSelected;

  $: sortedTags = sort(tags);
  $: allChecked = tags.length === selectedTags.length && untaggedSelected;

  function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((x) => x !== tag));
    } else {
      setSelectedTags([tag, ...selectedTags]);
    }
  }

  function toggleUntagged() {
    return setUntaggedSelected(!untaggedSelected);
  }

  function toggleAll() {
    if (allChecked) {
      setSelectedTags([]);
      setUntaggedSelected(false);
    } else {
      setSelectedTags(tags);
      setUntaggedSelected(true);
    }
  }
</script>

<ul>
  <li>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="_all"
        checked={allChecked}
        on:click={toggleAll} />
      {allChecked ? 'Unselect All' : 'Select All'}
    </label>
  </li>
  <li>
    <label>
      <input
        type="checkbox"
        name="tags"
        value="_untagged"
        checked={untaggedSelected}
        on:click={toggleUntagged} />
      UNTAGGED
    </label>
  </li>
  {#each sortedTags as tag}
    <li>
      <label>
        <input
          type="checkbox"
          name="tags"
          value={tag}
          checked={selectedTags.includes(tag)}
          on:click={() => toggleTag(tag)} />
        {tag}
      </label>
    </li>
  {/each}
</ul>
