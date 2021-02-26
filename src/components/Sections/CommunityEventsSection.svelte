<script>
    import { onMount, tick, beforeUpdate } from 'svelte';
    import { slide }        from 'svelte/transition';
    import axios            from "axios";
    import LoadingSpinner from '../LoadingSpinner.svelte';
    

    let eventsList;

    const mixArray = (a, b) => {  
        return 0.5 - Math.random();
    }  

    const listView = (lists, idx) => {
        eventsList[lists][idx].selected = !eventsList[lists][idx].selected;
    }

    onMount( async () => {
        const resp = await axios.get(`https://dkjss7qyb8.execute-api.ap-northeast-2.amazonaws.com/dev/page-management/community-events/list/landing`)
        for (let lists in resp.data){
            if (resp.data[lists][0].id){
                resp.data[lists].forEach( item => {
                    item.date = new Date(item["date"]);
                    item.selected = false;
                });
            }
        }
        eventsList = resp.data;
    });
</script>

<div class="community-events-wrapper">
    <slot></slot>
    <div class="list-wrapper">
        {#if eventsList}
        <ul class="upcoming-events">
            <li class="list-name"><p>Upcoming</p></li>
            {#if eventsList.upcoming_events[0].id}
                {#each eventsList.upcoming_events as item, idx}
                    <li class="list-item unselected" on:click={()=>listView("upcoming_events", idx)}>
                        <p class="event-title">{item.title}</p>
                        <p class="event-date">{`${item.date.getFullYear()}년 ${item.date.getMonth()+1}월 ${item.date.getDate()}일`}</p>
                    </li>
                    {#if item.selected}
                        <li class="selected" transition:slide>
                            <span class="event-description">{item.description}</span>
                            {#if item.link_url}
                                <a href={item.link_url} target="_blank">바로가기</a>
                            {/if}
                        </li>
                    {/if}
                {/each}
            {:else}
                <li class="list-item unselected">
                    <p class="event-title">이벤트를 준비 중입니다.</p>
                    <p class="event-date">coming soon</p>
                </li>
            {/if}
        </ul>
        <ul class="finished-events">
            <li class="list-name"><p>We did</p></li>
            {#each eventsList.finished_events as item, idx}
                <li class="list-item unselected" on:click={()=>listView("finished_events", idx)}>
                    <p class="event-title">{item.title}</p>
                    <p class="event-date">{`${item.date.getFullYear()}년 ${item.date.getMonth()+1}월 ${item.date.getDate()}일`}</p>
                </li>
                {#if item.selected}
                    <li class="selected" transition:slide>
                        <span class="event-description">{item.description}</span>
                        {#if item.link_url}
                            <a href={item.link_url} target="_blank">바로가기</a>
                        {/if}
                    </li>
                {/if}
            {/each}
        </ul>
        {:else}
            <LoadingSpinner/>
        {/if}
    </div>
</div>

<style lang="scss">
    @import 'assets/scss/common.scss'; 

    .community-events-wrapper {

        .list-wrapper{
            margin-top: 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            font-size: 0.9em;

            ul {
                display: block;
                width: 50%;
                padding-right: 20px;

                li {
                    display: block;

                    &.list-name {
                        margin-bottom: 12px;

                        p {
                            display: inline-block;
                            color: white;
                            background-color: var(--theme-color1);
                            padding: 4px 20px;
                            border-radius: 30px;
                            text-align: center;
                            font-size: 0.8em;
                        }
                    }

                    &.list-item {
                        font-size: 0.8em;
                        padding: 10px 3px;
                        color: var(--sub-color1);
                        border-top: 1px solid #cccccc;
                        background-color: white;

                        .event-title {
                            margin-bottom: 0;
                        }

                        .event-date {
                            display: block;
                            font-size: 0.8em;
                            color: var(--theme-color1);
                        }

                        &:hover {
                            cursor: pointer;
                            background-color: #f8f8f8;
                        }
                    }

                    &.selected {
                        font-size: 0.8em;
                        padding: 0px 3px 10px;
                        color: var(--sub-color1);
                        background-color:white;
                        overflow: hidden;

                        a {
                            display: inline-block;
                            padding: 1px 12px;
                            background-color: var(--theme-color1);
                            border-radius: 10px;
                            color: white;
                            font-size: 0.7em;
                            margin-left: 20px;
                        }
                    }
                }
            }

            @include respond-to('w800') {
                font-size: 1em;
                display: block;

                ul {
                    width: 100%;
                    margin-bottom: 50px;
                    padding: 0;
                }
                
            }
        }
    }
</style>