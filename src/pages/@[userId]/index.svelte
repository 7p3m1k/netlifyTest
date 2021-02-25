<script>
    import { onMount }          from 'svelte';
    import { goto, url, ready, params }        from '@roxi/routify';
    import Header               from '../../components/Header.svelte';
    import SectionWrapper       from '../../components/SectionWrapper.svelte';
    import UserProject          from '../../Components/UserProject.svelte';
    import UserProfileSection   from '../../Components/Sections/UserProfileSection.svelte';
    import UserBrandListSection from '../../Components/Sections/UserBrandListSection.svelte';
    import LoadingSpinner       from '../../components/LoadingSpinner.svelte';
    import axios                from "axios";

    let nickname = $params.userId.slice(1);

    let userProfile;

    let userMetaInfo = {};
    
    let userProjects;

    const getRecentProjects = async () => {
        try {
            const resp = await axios({
                method: 'get',
                url: `${myProcess.env.FB_API_URL}/getProjectRecent5?nickname=${nickname}`,
            });

            userProjects = await resp.data.project_list;

        } catch(err) {
            if (err.response && err.reponse.status === 400){
                $goto($url('/_fallback'));
            }
        }
    }


    const getUserInfo = async() => {
        try {
            const resp = await axios({
                method: 'get',
                url: `${myProcess.env.FB_API_URL}/getUserBasicInfo?nickname=${nickname}`,
            });

            userProfile = await resp.data;
        } catch(err) {
            console.log("사용자 정보 가져오기에 실패하였습니다. = " + nickname);
            $goto($url('/_fallback'));
        } finally {
            userProfile["userColor"] = "#1ecce4";
        }
    };

    const getUserMeta = async() => {
        try {
            const resp = await axios({
                method: 'get',
                url: `${myProcess.env.FB_API_URL}/getUserBasicInfo?nickname=${nickname}`,
            });

            userMetaInfo = await resp.data;
            $ready()

        } catch(err) {
            console.log("사용자 정보 가져오기에 실패하였습니다. = " + nickname);
            $goto($url('/_fallback'));
        }
    };


    onMount( () => {
        getUserMeta();
        getUserInfo();
        getRecentProjects();
    });

</script>

<svelte:head>
    <title>{userMetaInfo.name}</title>
    <meta property="og:title" content={userMetaInfo.name}/>
    <meta property="og:image" content={userMetaInfo.photo_url}/>
    <meta property="og:description" content={userMetaInfo.note}/>
</svelte:head>

<Header />
{#if userProfile}
    <SectionWrapper className="section-top">
        <UserProfileSection 
            userProfile={userProfile} 
            nickname={nickname} />
    </SectionWrapper>
    <SectionWrapper>
        <div class="title">
            <strong>Brand</strong>
            <span>클릭하여 {userProfile.name} 님의 브랜드를 더 자세히 살펴보세요-! </span>
        </div>
        <UserBrandListSection 
            nickname={nickname}
            userName={userProfile.name} 
            userColor={userProfile.userColor}/>
    </SectionWrapper>
    <SectionWrapper>
        <div class="title">
            <strong>Recent Projects</strong>
            <span style="color:{userProfile.userColor}" class="ing">■ 진행 중</span><span class="end">■ 종료</span>
        </div>
        <ul class="project-list">
        {#if userProjects}
            {#each userProjects as item}
                <li>
                    <UserProject
                        nickname={nickname}
                        userColor={userProfile.userColor}
                        projectTitle={item.title}
                        projectSummary={item.summary}
                        projectStatus={item.status}
                        projectId={item.project_id} />
                </li>
            {/each}
        {:else}
            <LoadingSpinner />
        {/if}
        </ul>
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
    <LoadingSpinner />
{/if}



<style lang="scss">
    @import '../assets/scss/common.scss'; 

    .title {
        margin-bottom: 20px;

        strong {
            font-size: 1.3em;
            color: $sub-color1;
            display: inline-block;
        }

        span {
            margin-left: 20px;
            font-size: 0.8em;
            color: $theme-color1;
            display: inline-block;

            &.end {
                color: #cccccc;
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