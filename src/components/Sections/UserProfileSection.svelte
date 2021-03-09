<script>
    import { onMount }                  from 'svelte';
    import LoadingSpinner               from '../LoadingSpinner.svelte';
    import TextBox                      from '../TextBox.svelte';
    import { page }                     from '@roxi/routify';

    export let nickname;
    export let userProfile;
    
    let userSns = {
        "tw": "",
        "fb": "",
        "in": "",
        "etc": [],
    }

    const sortSns = (sns) => {
        
        for (let i = 0; i < sns.length; i++ ) {
            if (sns[i][0] !== "h"){
                sns[i] = "https://" + sns[i];
            }
            if (sns[i].match("twitter")){
                userSns["tw"] = sns[i];
            } else if (sns[i].match("facebook")){
                userSns["fb"] = sns[i];
            } else if (sns[i].match("instagram")){
                userSns["in"] = sns[i];
            } else {
                userSns["etc"].push(sns[i]);
            }
        }
    }

    onMount(() => {
        if (userProfile){
            sortSns(userProfile.sns);
        }
    });

</script>

<div class="user-profile-wrapper">
{#if userProfile}
    <div class="profile-img" style="background-image:url({userProfile.photo_url})"></div>
    {#if userProfile.name}
        <h3>{userProfile.name}</h3>
    {/if}
    <!-- svelte-ignore missing-declaration -->
    <p style="color:{userProfile.userColor}" class="user-name">@{nickname} <img src="{myProcess.env.IMG_URL}/assets/icon-copy.png" alt=""></p>
    <TextBox
        tagType="p"
        className="user-profile-note"
        context={userProfile.note}
    />
    <p class="note"></p>
    <ul class="user-tags">
    {#each userProfile.tags as tag, idx}
        <li style="color:{userProfile.userColor}">
            {tag}
        </li>
    {/each}
    </ul>
    <ul class="user-sns">
    {#each ["tw", "fb", "in"] as item}
        {#if userSns[item]}
        <li class={item}>
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-missing-content -->
            <a href={userSns[item]} target="_blank" style="background-image:url({myProcess.env.IMG_URL}/assets/sns-{item}.png)"></a>
        </li>
        {/if}
    {/each}
    {#if userSns.etc.length > 0}
        {#each userSns.etc as item}
        <li class="etc">
            <!-- svelte-ignore a11y-missing-content -->
            <!-- svelte-ignore missing-declaration -->
            <a href={item} style="background-image:url({myProcess.env.IMG_URL}/assets/sns-etc.png)"></a>
        </li>
        {/each}
    {/if}
    </ul>
{:else}
    <LoadingSpinner />
{/if}
</div>

<style lang="scss">
    @import 'assets/scss/common.scss'; 
    .user-profile-wrapper {
        width: 100%;
        padding: 50px 0 50px;
        border-bottom: 1px solid #cccccc;


        .profile-img {
            background-position: center;
            background-size: cover;
            background-repeat: none;
            width: 180px;
            height: 180px;
            display: block;
            margin: 0 auto 30px;
            border-radius: 50%;

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
        
        h3 {
            color: var(--sub-color1);
            font-size: 1em;
            text-align: center;
            margin-bottom: 10px;

            @include respond-to('w600'){
                margin-bottom: 6px;
            }
        }

        .user-name {
            font-size: 0.9em;
            text-align: center;
            margin-bottom: 80px;

            @include respond-to('w600'){
                margin-bottom: 50px;
            }

            img {
                display: inline-block;
                margin-left: 4px;
                width: 20px;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        :global(p.user-profile-note) {
            font-size: 0.9em;
            color: #aaaaaa;
            font-weight: 400;
        }        

        .user-tags {
            margin: 10px auto;

            li {
                font-size: 0.9em;
                display: inline-block;
                margin-right: 15px;
            }
        }

        .user-sns {
            li {
                display: inline-block;

                a {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: none;
                    margin-right: 10px;
                }
            }
        }
    }

</style>

