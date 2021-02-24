<script>
    import { onMount }          from 'svelte';
    import { goto, url, ready, params }        from '@roxi/routify'
    import Header               from '../../components/Header.svelte'
    import SectionWrapper       from '../../components/SectionWrapper.svelte';
    import UserProject          from '../../Components/UserProject.svelte';
    import UserProfileSection   from '../../Components/Sections/UserProfileSection.svelte';
    import UserBrandListSection from '../../Components/Sections/UserBrandListSection.svelte';
    import LoadingSpinner       from '../../components/LoadingSpinner.svelte';
    import axios            from "axios";

    let nickname = $params.userId.slice(1);

    let userProfile;
    let userProjects;

    const getRecentProjects = () => {
        axios.get(`${myProcess.env.FB_API_URL}/getProjectRecent5?nickname=${nickname}`)
            .then(resp => {
                userProjects = resp.data.project_list;
                console.log(userProjects)
            })
            .catch(() =>{
                console.log("프로젝트 정보 가져오기에 실패하였습니다. = " + nickname);
                $goto($url('_fallback'));
            }
        );
    }

    const getUserInfo = async() => {
        try {
            const resp = await axios({
                method: 'get',
                url: `${myProcess.env.FB_API_URL}/getUserBasicInfo?nickname=${nickname}`,
            });
            console.log("--------------------")
            userProfile = await resp.data;
            await console.log(userProfile);
            $ready()
        } catch(err) {
            console.log("사용자 정보 가져오기에 실패하였습니다. = " + nickname);
            $goto($url('_fallback'));
        } finally {
            userProfile["userColor"] = "#1ecce4";
        }
    };


    onMount( () => {
        getUserInfo();
        getRecentProjects();
    });

</script>


<svelte:head>
    <title>{userProfile.name}</title>
    <meta property="og:title" content={userProfile.name}/>
    <meta property="og:image" content={userProfile.photo_url}/>
    <meta property="og:description" content={userProfile.note}/>
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
    <img class="allius-loading-gif" src="https://allius-images.s3.ap-northeast-2.amazonaws.com/static-images/loading.gif" alt="loading content">
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