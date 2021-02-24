<script>
    import { onMount }      from 'svelte';
    import TextBox                  from '../../components/TextBox.svelte';
    import Header                   from '../../components/Header.svelte';
    import SectionWrapper           from '../../components/SectionWrapper.svelte';
    import UserBrandListSection     from '../../Components/Sections/UserBrandListSection.svelte';
    import UserProject              from '../../Components/UserProject.svelte';
    import UserContent              from '../../Components/userContent.svelte';
    import { params } from '@roxi/routify';
    import { goto, url }        from '@roxi/routify'
    import axios            from "axios";

    
    export let nickname;
    export let brandId ;

    let userName;
    let inspTextWidth;
    let brandDetail;
    let brandProjects;

    const ff = () => {
        console.log($params)
    }

    const getBrandDetail = () => {
        console.log(`check! >>>> name: ${nickname} & id: ${brandId}`);
        axios.get(`${myProcess.env.FB_API_URL}/getBrandDetail?nickname=${nickname}&brandId=${brandId}`)
            .then(resp => {
                brandDetail = resp.data;
            }).catch(() =>{
                console.log("Brand 정보 가져오기에 실패하였습니다. = " + nickname);
                // window.location.href = `${myProcess.env.ROOT_URL}/@${nickname}`;
                $goto($url('pages/index'));
                
                //navigate(`/@${nickname}`, { replace: false });
            }
        );
    }

    const getUserName = () => {
        axios.get(`${myProcess.env.FB_API_URL}/getUserName?nickname=${nickname}`)
            .then(resp => {
                userName = resp.data.name;
            }).catch(() =>{
                console.log("사용자 이름 정보 가져오기에 실패하였습니다. = " + nickname);
                window.location.href = `${myProcess.env.ROOT_URL}/@${nickname}`;
                //navigate(`/@${nickname}`, { replace: false });
            }
        );
    }

    const getBrandProjectAll = () => {
        axios.get(`${myProcess.env.FB_API_URL}/getBrandProjectAll?nickname=${nickname}&brandId=${brandId}`)
            .then(resp => {
                brandProjects = resp.data.project_list;
            }).catch(() =>{
                console.log("프로젝트 정보 가져오기에 실패하였습니다. = " + nickname);
                window.location.href = `${myProcess.env.ROOT_URL}/@${nickname}`;
                // navigate(`/@${nickname}`, { replace: false });
            }
        );
    }

    onMount(() => {
        getUserName();
        getBrandDetail();
        getBrandProjectAll();
        ff();
    })


</script>

<Header />
{#if brandDetail && userName}
    <SectionWrapper className="section-top">
        <div class="brand-icon" style="background-image:url(https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-{brandDetail.brand_icon}.jpg?alt=media)"></div>
        <p class="user-info">{userName}(<a href="{myProcess.env.ROOT_URL}/@{nickname}">@{nickname}</a>)'s brand</p>
        <h1 class="brand-title">{brandDetail.title}</h1>
    </SectionWrapper>
    <SectionWrapper>
        {#if brandDetail.why}
            <p class="sub-title">Why<span>나는 왜 이 일을 할까요?</span></p>
            <TextBox
                tagType="p"
                className="brand-content-why"
                context={brandDetail.why}
            />
        {/if}
        {#if brandDetail.inspirations && (brandDetail.inspirations.length > 0)}
            <p class="sub-title">Inspirations<span>영감 소스</span></p>
            <ul class="inspirations">
            {#each brandDetail.inspirations as item}
                {#if item.title && item.content}
                <li>
                    <div class="text-box" bind:clientWidth={inspTextWidth}>
                        <p class="link-title">{(item.title.length * 14) > inspTextWidth? `${item.title.slice(0, Math.floor(inspTextWidth/14))}...`: item.title}</p>
                        <p class="link-content">{(item.content.length * 14) > inspTextWidth? `${item.content.slice(0, Math.floor(inspTextWidth/14))}...`: item.content}</p>
                    </div>
                    <a href="{item.link}">바로가기</a>
                </li>
                {/if}
            {/each}
            </ul>
        {/if}
        {#if brandProjects && (brandProjects.length > 0)}
            <p class="sub-title">Experiences<span>축적된 경험</span></p>
            <p class="project-type-list">
                <span class="ing">■ 진행 중인 프로젝트</span>
                <span class="end">■ 종료된 프로젝트</span>
                <span class="content">■ 콘텐츠(링크)</span>
            </p>
            <ul class="project-list">
            {#each brandProjects as item}
                <li>
                    {#if item.type === "project"}
                        <UserProject
                            nickname={nickname}
                            userColor="#1ECCE4"
                            projectTitle={item.title}
                            projectSummary={item.summary}
                            projectStatus={item.status}
                            projectId={item.project_id} />
                    {:else if item.type === "content"}
                        <UserContent
                            contentTitle={item.title}
                            contentSummary={item.summary}
                            contentLink={item.link} />
                    {/if}
                </li>
            {/each}
            </ul>
        {/if}
        {#if brandDetail.future_projects && (brandDetail.future_projects.length > 0) && brandDetail.future_projects[0]}
            <p class="sub-title">future_projects<span>하고 싶은 프로젝트</span></p>
            <ul class="content-array-type">
            {#each brandDetail.future_projects as item}
                <li><strong style="color:#1ECCE4">✔</strong> {item}</li>
            {/each}
            </ul>
        {/if}
        {#if brandDetail.wanted && (brandDetail.wanted.length > 0) && brandDetail.wanted[0]}
            <p class="sub-title">Wanted<span>필요한 자원</span></p>
            <ul class="content-array-type">
            {#each brandDetail.wanted as item}
                <li><strong style="color:#1ECCE4">✔</strong> {item}</li>
            {/each}
            </ul>
        {/if}
        <div class="back-to-profolio">
            <a href="{$url(`/@${nickname}`)}">{userName} 님의 프로폴리오로 돌아가기</a>
        </div>
        <p class="sub-title">{userName}'s Brand<span>클릭하여 더 자세히 살펴보세요-! </span></p>
        <UserBrandListSection 
            nickname={nickname} 
            userName={userName} 
            userColor="#1ECCE4"/>
    </SectionWrapper>
    <div class="line-seperator">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <SectionWrapper>
        <a class="join" href="https://allius.io/desk">Make Yours!</a> 
        <p class="copyright">© realwesen, Inc. All Rights Reserved.</p>
    </SectionWrapper>
{:else}
    <img class="allius-loading-gif" src="https://allius-images.s3.ap-northeast-2.amazonaws.com/static-images/loading.gif" alt="loading content">
{/if}

<style lang="scss">
    @import '../assets/scss/common.scss'; 

    .brand-icon {
        background-position: center;
        background-size: cover;
        background-repeat: none;
        width: 180px;
        height: 180px;
        display: block;
        margin: 0 auto 30px;

        @include respond-to('w600'){
            width: 160px;
            height: 160px;
            margin-bottom: 15px;
        }

        @include respond-to('w400'){
            width: 140px;
            height: 140px;
        }
    }

    .user-info {
        font-size: 0.8em;
        text-align: center;
        color: $theme-color1;
        font-weight: 700;

        a {
            color: $theme-color1;
            display: inline-block;
            margin: 0 4px;
            font-weight: 400;

            &:hover {
                font-weight: 700;
            }
        }
    }

    .brand-title {
        font-size: 1.3em;
        text-align: center;
    }

    .sub-title {
        font-size: 0.8em;
        color: $theme-color1;
        font-weight: 700;
        margin: 70px auto 10px;

        span {
            display: inline-block;
            font-size: 0.9em;
            color: #aaaaaa;
            margin-left: 12px;
            font-weight: 400;
        }
    }

    .project-type-list {
        margin-bottom: 10px;

        span {
            font-size: 0.6em;
            display: inline-block;
            margin-right: 15px;

            &.ing {
                color: $theme-color1;
            }

            &.end {
                color: #cccccc;
            }

            &.content {
                color: $theme-color2;
            }
        }

        
    }

    :global(p.brand-content-why) {
        font-size: 0.8em;
        font-weight: 400;
        color: black;
        line-height: 1.5em;
    }

    .inspirations {
        margin-top: 10px;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-top: 1px solid #eeeeee;

            .text-box {
                flex-grow: 1;

                p {
                    font-size: 0.8em;
                    color: black;

                    &.link-content {
                        color: #aaaaaa;
                    }
                }
            }

            a {
                display: block;
                flex-grow: 0;
                padding: 2px 20px;
                background-color: $theme-color1;
                font-size: 0.6em;
                color: white;
                transition: 0.2s all;
                border-radius: 20px;

                &:hover {
                    color: #eeeeee;
                }

                @include respond-to('w600'){
                    font-size: 0.7em;
                    padding: 2px 12px;
                }
            }
        }
    }

    .content-array-type {
        li {
            font-size: 0.8em;
            color: $sub-color1;
        }
    }

    .back-to-profolio {
        margin: 120px 0 20px;
        padding-bottom : 30px;
        border-bottom: 1px solid #eeeeee;

        a {
            display: inline-block;
            color: $theme-color2;
            font-size: 0.8em;
            transition: 0.2s all;

            &:hover {
                color: darken($theme-color2, 20%);
                cursor: pointer;
            }
        }
    }

    .join {
        font-size: 2.2em;
        font-weight: 400;
        text-align: center;
        display: block;
        color: $sub-color1;
        transition: 0.2s all;

        &:hover {
            color: $theme-color1;
        }
    }

    .line-seperator {
        display: flex;
        margin-bottom: 80px;

        div {
            flex-grow: 1;
            height: 200px;

            &.left {
                border-right: 1px solid #aaaaaa;
            }

            &.right {
                border-right: 1px solid #aaaaaa;
            }
        }
    }

    .copyright {
        font-size: 0.6em;
        text-align:center;
        color: #aaaaaa;
        padding-bottom: 100px;
    }

</style>