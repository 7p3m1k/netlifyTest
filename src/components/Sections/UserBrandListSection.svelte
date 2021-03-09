<script>

    import { onMount }          from 'svelte';  
    import LoadingSpinner       from '../LoadingSpinner.svelte';
    import { goto, url, ready }        from '@roxi/routify'
    import axios                from 'axios';

    export let nickname;
    export let userColor;

    let brandList;

    let scrollWidth;
    let wrapperWidth;
    let boxWidth;
    let scrollX = 0; 
    let isOverFlow = false;
    let brandListUl;

    const handleScroll = (bool) => {
        if (bool){
            brandListUl.scrollTo(scrollX+boxWidth, 0);
        } else {
            brandListUl.scrollTo(scrollX-boxWidth, 0);
        }
    }

    const getScrollX = () => {
        scrollX = brandListUl.scrollLeft;
    }

    const getBrandList = async () => {
        try {
            const resp = await axios({
                method: 'get',
                url: `${myProcess.env.FB_API_URL}/getBrandList?nickname=${nickname}`,
            });
            brandList = await resp.data.brand_list;
            $ready()

        } catch(err) {
            console.log("사용자 이름 정보 가져오기에 실패하였습니다.");
            $goto($url('/'));
        }
    };


    onMount(()=>{
        scrollX = 0;
        getBrandList();
    });

</script>

<div class="user-brand-wrapper" bind:clientWidth={wrapperWidth}>
    <ul bind:this={brandListUl} bind:clientWidth={scrollWidth}>
    {#if brandList && userColor}
        {#each brandList as item}
            <li bind:clientWidth={boxWidth}>
                <a href={$url(`/@${nickname}/${item.brand_id}`)}>
                    <img alt={item.title} src="https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-{item.brand_icon}.jpg?alt=media">
                    <p>{item.title}</p>
                </a>
            </li>
        {/each}
    {:else}
        <LoadingSpinner/>
    {/if}
    </ul>
    {#if isOverFlow}
    <div class="arrow-btns">
        <button on:click={()=>handleScroll(false)}>ᐸ</button><button on:click={()=>handleScroll(true)}>ᐳ</button>
    </div>
    {/if}
</div>


<style lang="scss">
    @import 'assets/scss/common.scss'; 

    .user-brand-wrapper {
        width: 100%;

        ul {
            width: auto;
            overflow-x: scroll;
            display: flex;
            flex-wrap: nowrap;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                a{
                    width: 200px;
                    height: 280px;
                    flex: 0 0 auto;
                    display: block;
                    border : 1px solid var(--sub-color1);
                    border-radius : 12px;
                    margin-right: 15px;
                    overflow: hidden;

                    &:hover {
                        cursor: pointer;
                    }

                    &:last-child {
                        margin-right: 0;
                    }

                    img {
                        display: block;
                        width: 100%;
                        margin: 0 auto 20px;
                        padding: 20px 20px 0;
                    }

                    p {
                        font-size: 0.7em;
                        color: var(--sub-color1);
                        text-align: center;
                        padding: 0 8px;
                        font-weight: 900;

                        @include respond-to('w1000') {
                            font-size: 0.8em;
                        }

                        @include respond-to('w800') {
                            font-size: 0.9em;
                        }
                    }
                }
            }
        }

        .arrow-btns {
            margin-top: 20px;

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

    }

</style>