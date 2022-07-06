<script lang="ts">
    let arr: string[] = [
        "Java",
        "C",
        "C++",
        "Python"
    ]
</script>

<main>
    <div class="container" id="stack-main">
        <h2>My Stack</h2>
        <p>Preffered programming lanuages:</p>
        <ul>
            {#each arr as data}
                <li>{data}</li>
            {/each}
        </ul>
    </div>
</main>

<style>
    #stack-main ul{
        list-style:none;
        font-style: italic;
        font-size: 18px;
        padding-top: 0;
        margin: 0;
    }
</style>