<script>
  export let tags;
  export let selectedTags;
  export let setSelectedTags;

  function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((x) => x !== tag));
    } else {
      setSelectedTags([tag, ...selectedTags]);
    }
  }
</script>

<ul>
  {#each tags as tag}
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
