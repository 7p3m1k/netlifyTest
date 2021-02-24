<script>
    import { onMount }      from 'svelte';

    export let contentTitle;
    export let contentSummary;
    export let contentLink;

</script>

{#if contentTitle && contentSummary && contentLink }
    <div class="project-wrapper">
        <a class="summary-wrapper" target="_blank" href="{contentLink}">
            <h3 class="project-title">{contentTitle}</h3>
            <p class="project-summary">{contentSummary}</p>
        </a>
    </div>
{:else}
    <img class="allius-loading-gif" src="https://allius-images.s3.ap-northeast-2.amazonaws.com/static-images/loading.gif" alt="loading content">
{/if}


<style lang="scss">
    @import '../assets/scss/common.scss'; 

    .project-wrapper {
        border-left-color: $theme-color2;
        scroll-behavior: smooth;
        padding: 6px 0 6px 30px;
        border-left-width: 5px;
        border-left-style: solid;
        margin-bottom: 10px;
        transition: 0.2s all;

        &:hover {
            border-left-width: 10px;
            padding-left: 25px;
            cursor: pointer;
        }

        a {
            display: block;

            .project-title {
                font-size: 0.9em;
                color: $theme-color2;
                margin-bottom: 6px;
            }

            .project-summary {
                color: #aaaaaa;
                font-size: 0.8em;
            }
        }
    }

</style>