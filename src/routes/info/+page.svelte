<script>
    export let data;
</script>
   
{#each data.infos as info}
    <h2>{info.infoTitle}</h2>
    {@html info.infoInfo.html}
{/each}



        