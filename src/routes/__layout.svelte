<script lang="ts">
    import './../styles/global.css';
    import Header from './../lib/Header.svelte';
    import Footer from './../lib/Footer.svelte';
</script>

<header>
    <title>My website</title>
    <Header/>
</header>
<main class="vertical-center">
    <!-- page content -->
    <slot></slot>
</main>
<footer>
    <Footer/>
</footer>

<style>
    * {
		color: grey;
		font-family:sans-serif;
		font-size: 16px;
		line-height: 1.6em;
		margin:0;
		text-align: center;
	}
    main{
        margin-top: 20px;
    }
</style>