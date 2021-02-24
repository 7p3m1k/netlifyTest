<script>
    import axios from 'axios';
    import { onMount }      from 'svelte';
    import { slide }        from 'svelte/transition';
    import LoadingSpinner from './LoadingSpinner.svelte';

    export let nickname;
    export let userColor;
    export let projectTitle;
    export let projectSummary;
    export let projectStatus;
    export let projectId;

    let projectDetail;
    let isOpened = false;
    let projectWrapper;

    const getProjectDetail = () => {
        axios.get(`${myProcess.env.FB_API_URL}/getProjectDetail?nickname=${nickname}&projectId=${projectId}`)
            .then(resp => {
                projectDetail = resp.data;
            }).catch(() =>{
                console.log("프로젝트 정보 가져오기에 실패하였습니다.");
                // window.location.href = `${myProcess.env.ROOT_URL}/@${nickname}`;
                // navigate(`@${nickname}`, { replace: false });
            }
        );
    }

    const showProjectAll = async () => {
        if (!projectDetail) {
            await getProjectDetail();
        } 
        isOpened = true;   
        window.scrollTo({top: projectWrapper.offsetTop, behavior: 'smooth'});
    }

    const hideProjectDetail = () => {
        window.scrollTo({top: projectWrapper.offsetTop, behavior: 'smooth'});
        isOpened = false;
    }

    onMount(async () => {
        await getProjectDetail();
    });

</script>

{#if projectTitle && projectId }
    <div class={isOpened? "project-wrapper opened":"project-wrapper not-opened"} style={projectStatus==="ing"? `border-left-color:${userColor}`: ""} bind:this={projectWrapper}>
        <div class="summary-wrapper" on:click={()=>showProjectAll()}>
            <h3 class="project-title" style={projectStatus==="ing"? `color:${userColor}`: ""}>{projectTitle}</h3>
            {#if projectSummary}
                <p class="project-summary">{projectSummary}</p>
            {/if}
        </div>
        {#if isOpened && projectDetail}
            <div class="detail-wrapper" transition:slide>
                {#if projectDetail.from_date}
                    <p class="date" style="color:{userColor}">{projectDetail.from_date} - {projectDetail.to_date}</p>
                {/if}
                {#if projectDetail.process}
                    <p class="sub-title">Project Process<span>과정</span></p>
                    <div class="content-process text-area">{@html projectDetail.process}</div>
                {/if}
                {#if projectDetail.collabo && (projectDetail.collabo.length > 0)}
                    <p class="sub-title">Collaborated with<span>함께 한 사람들</span></p>
                    <ul class="collabo">
                        {#each projectDetail.collabo as item}
                            <li>
                                <a href="https://allius.io/@{item.user_name}">
                                    <div class="img-box" style="background-image:url({item.img_src})"></div>
                                    <p class="collabo-name"><strong>{item.name}</strong>@{item.user_name}</p>
                                    <p class="summary">{item.summary}</p>
                                </a>
                            </li>
                        {/each}
                        <li></li>
                    </ul>
                {/if}
                {#if projectDetail.results}
                    <p class="sub-title">Result<span>결과</span></p>
                    <div class="content-results text-area">{@html projectDetail.results}</div>
                {/if}
                {#if projectDetail.learned && (projectDetail.learned.length > 0)}
                    <p class="sub-title">What I got from this project?<span>배운 점</span></p>
                    <ul class="content-array-type">
                    {#each projectDetail.learned as item}
                        <li><strong style="color:{userColor}">✔</strong> {item}</li>
                    {/each}
                    </ul>
                {/if}
                <button on:click={()=>hideProjectDetail()}>✖ 프로젝트 상세보기 닫기</button>
            </div>
        {:else if isOpened }
            <LoadingSpinner />
        {/if}
    </div>
{:else}
    <LoadingSpinner />
{/if}


<style lang="scss">
    @import '../assets/scss/common.scss'; 

    .project-wrapper {
        border-left-color:#aaaaaa;
        scroll-behavior: smooth;
        padding: 6px 0 6px 30px;
        border-left-width: 5px;
        border-left-style: solid;
        margin-bottom: 10px;
        overflow: hidden;

        &.not-opened {
            transition: 0.2s all;

            &:hover {
                border-left-width: 10px;
                padding-left: 25px;
                cursor: pointer;
            }
        }

        .project-title {
            font-size: 0.9em;
            color: #aaaaaa;
            margin-bottom: 6px;
        }

        &.opened {
            .project-title {
                color: #555555;
            }
        }

        .project-summary {
            color: #aaaaaa;
            font-size: 0.8em;
        }

        .detail-wrapper {

            .date {
                margin-top: 10px;
                font-size: 0.6em;
                padding: 2px 16px;
                border: 1px solid $theme-color1;
                border-radius: 20px;
                display: inline-block;
            }

            .sub-title {
                font-size: 0.8em;
                color: $theme-color1;
                font-weight: 700;
                margin: 20px auto 10px;

                span {
                    display: inline-block;
                    font-size: 0.9em;
                    color: #aaaaaa;
                    margin-left: 12px;
                    font-weight: 400;
                }
            }

            .collabo {
                display: flex;
                flex-wrap: wrap;

                li {
                    flex-grow: 1;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    flex-basis: 360px;
                    max-width: 500px;
                    
                    a {
                        padding: 10px ;
                        display: block;
                        border: 1px solid $sub-color1;
                        border-radius: 4px;

                        .img-box {
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            background-position: center;
                            background-size: cover;
                            background-repeat: none;
                            float: left;
                            background-color: #eeeeee;
                        }

                        .collabo-name {
                            margin-left: 60px;
                            font-size: 12px;
                            color: $theme-color1;
                            font-weight: 400;

                            strong {
                                display: inline-block;
                                margin-right: 10px;
                                font-size: 15px;
                                color: $sub-color1;
                                font-weight: 700;
                            }
                        }

                        .summary {
                            margin-left: 60px;
                            font-size: 15px;
                            color: #555555;
                        }
                    }
                }
            }

            .text-area {
                width: 100%;
                font-size: 0.8em;
                font-weight: 400;
                color: black;
                line-height: 1.5em;
            }

            :global(div.text-area p img) {
                width: 90%;

                @include respond-to('w800'){
                    width: 100%;
                }
            }

            :global(div.text-area h2) {
                font-size: 1.2em;
                margin: 30px 0 10px;
            }

            .content-array-type {
                li {
                    font-size: 0.8em;
                    color: $sub-color1;
                }
            }

            button {
                display: block;
                border-style: none;
                background-color: white;;
                color: $theme-color2;
                margin-top: 50px;
                font-size: 0.8em;
                padding-bottom: 30px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

</style>