<script>
    import { onMount } from 'svelte';
    import Header   from '../../components/Header.svelte';
    import Footer   from '../../components/Footer.svelte';
    import Privacy  from '../../components/Privacy.svelte';

    let scrollY;

    onMount(() => {
        scrollY = 0;
    });

</script>

<Header />
<div class="sections">
    <Privacy />
</div>
<Footer />

<svelte:window bind:scrollY={scrollY}/>


<style lang="scss">
    @import 'assets/scss/common.scss'; 

    .sections {
        background-color: white;
        max-width: $wrapper;
        margin: 100px auto 0;
        padding: 0px 30px;
        font-size: $font-size * 0.8;
        font-family: $font-kr;
        word-break: keep-all;

        @include respond-to('w1000') {
            font-size: $font-size * 0.75;
        }

        @include respond-to('w800') {
            font-size: $font-size * 0.7;
        }

        @include respond-to('w600') {
            padding: 0 12px;
        }

    }

</style>