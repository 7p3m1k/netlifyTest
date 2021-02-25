<script>
    import { onMount }      from 'svelte';
    import TextBox          from '../TextBox.svelte';
    import axios            from "axios";
    import LoadingSpinner from '../LoadingSpinner.svelte';
    import { url,goto } from '@roxi/routify';


    const mixArray = (a, b) => {  
        return 0.5 - Math.random();
    } 

    let brStories;

    let brandStoryList;
    let scrollWidth;
    let wrapperWidth;
    let boxWidth;
    let scrollX = 0; 
    let isOverFlow = false;

    function clickToLink(target) {
        $goto($url(`/@${target.slice(19)}`));
    }

    const handleScroll = (bool) => {
        if (bool){
            brandStoryList.scrollTo(scrollX+boxWidth, 0);
        } else {
            brandStoryList.scrollTo(scrollX-boxWidth, 0);
        }
    }

    const getScrollX = () => {
        scrollX = brandStoryList.scrollLeft;
    }

    onMount(async () => {
        scrollX = 0;
        try {
            const resp = await axios({
            method: 'get',
            url: (`https://dkjss7qyb8.execute-api.ap-northeast-2.amazonaws.com/dev/page-management/brand-stories/list/landing`)
        })

            brStories = await resp.data["brand_stories_list"].sort(mixArray);
                if (scrollWidth > wrapperWidth) {
                    isOverFlow = true;
                }
        } catch(err) {
            $goto($url('/_fallback'));
        }
    });

</script>

<div class="brand-story-wrapper" bind:clientWidth={wrapperWidth}>
    <slot></slot>
    {#if brStories}
    <ul bind:this={brandStoryList} bind:clientWidth={scrollWidth} on:scroll={() => getScrollX()}> 
        {#each brStories as item}
            <li bind:clientWidth={boxWidth} on:click={() => clickToLink(item["link_url"])}>
                <span>{item["name"]}</span>
                <TextBox
                    tagType="h3"
                    className="br-title"
                    context={item["title"]}
                />
                <p>{item["description"]}</p>
            </li>
        {/each}
    </ul>
    {:else}
        <LoadingSpinner />
    {/if}
    <div class="arrow-btns">
        <button on:click={()=>handleScroll(false)}>ᐸ</button><button on:click={()=>handleScroll(true)}>ᐳ</button>
    </div>
</div>


<style lang="scss">
    @import 'assets/scss/common.scss'; 

    .brand-story-wrapper {
        width: 100%;

        .arrow-btns {
            margin-top: 20px;
            text-align: center;

            button {
                box-sizing: border-box;
                padding: 0px 14px;
                background-color: #cccccc;
                color: white;
                font-size: 0.8em;
                border-radius: 20px;
                border: 4px solid white;

                &:hover {
                    cursor: pointer;
                    background-color: #aaaaaa;
                }
            }

            @include respond-to('w600'){
                display: none;
            }
        }
        
        ul {
            width: auto;
            margin-top: 20px;
            overflow-x: scroll;
            display: flex;
            flex-wrap: nowrap;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                width: 280px;
                height: 280px;
                flex: 0 0 auto;
                display: block;
                border : 1px solid black;
                border-radius : 8px;
                padding: 20px;
                margin-right: 15px;
                overflow: hidden;

                @include respond-to('w600') {
                    width: 240px;
                    height: 240px;
                }

                &:hover {
                    cursor: pointer;
                }

                &:last-child {
                    margin-right: 0;
                }

                span {
                    font-size: 0.6em;
                    color: $theme-color1;
                    display: block;
                    margin-bottom: 3px;
                }

                :global(h3.br-title) {
                    display: block;
                    font-size: 1.1em;
                    line-height: 1.2em;
                    font-weight: 700;
                    color: black;

                    &:hover {
                        cursor: pointer;
                    }

                    &::placeholder {
                        color: black;
                    }
                }

                p {
                    margin-top: 8px;
                    font-size: 0.7em;
                }
            }
        }
    }


</style>

