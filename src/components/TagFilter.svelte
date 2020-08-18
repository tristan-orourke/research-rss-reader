<script>
  import {sort} from "../helpers/arrays";

  export let tags;
  export let selectedTags;
  export let setSelectedTags;
  export let untaggedSelected;
  export let setUntaggedSelected;

  $: sortedTags = sort(tags);

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

</script>

<ul>
  <li>
    <input
      type="checkbox"
      name="tags"
      value="untagged"
      checked={untaggedSelected}
      on:click={toggleUntagged} />
    <label for="untagged">UNTAGGED</label>
  </li>
  {#each sortedTags as tag}
    <li>
      <input
        type="checkbox"
        name="tags"
        value={tag}
        checked={selectedTags.includes(tag)}
        on:click={() => toggleTag(tag)} />
      <label for={tag}>{tag}</label>
    </li>
  {/each}
</ul>
