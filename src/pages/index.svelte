<script>

    import BrandStorySection            from '../components/Sections/BrandStorySection.svelte';
    import TutorialSection              from '../components/Sections/TutorialSection.svelte';
    import CommunityEventsSection       from '../components/Sections/CommunityEventsSection.svelte';
    import Header                       from '../components/Header.svelte';
    import Footer                       from '../components/Footer.svelte';
    import SectionWrapper               from '../components/SectionWrapper.svelte';
    import Seperator                    from '../components/Seperator.svelte';

    let loginCheck;
    let winWidth = window.innerWidth;
    $: imgWidth = (winWidth > 1000) ? 440 : winWidth*0.44;

    function clickToLink(target) {
        window.open(target, _self);
    }


</script>

<Header bind:loginCheck={loginCheck} />
<SectionWrapper className="section-top">
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-missing-content -->
    <a class="cover-image" style="background-image: url({myProcess.env.IMG_URL}/static-images/landing-03.jpg);" href="https://allius.io/desk"></a>
    <!-- <CoverSection imgWidth={imgWidth} {loginCheck} /> -->
</SectionWrapper>
<SectionWrapper>
    <BrandStorySection>
        <h2 class="section-title">나만의 브랜드를 만들어가는 사람들을 만나보세요.</h2>
        <Seperator 
            borderColor="#1ecce4"
            borderWidth=6
            seperatorWidth="80px"
            paddingTop=40
            paddingBottom=20
        />
    </BrandStorySection>
</SectionWrapper>
<SectionWrapper>
    <TutorialSection imgWidth={imgWidth}>
        <h2 class="section-title">처음 오셨나요?</h2>
        <Seperator 
            borderColor="#1ecce4"
            borderWidth=6
            seperatorWidth="80px"
            paddingTop=40
            paddingBottom=20
        />
        <p class="section-description" style="margin: 0 auto; width: 70%;">당신의 브랜드를 만드는 공간, 스튜디오에 입장하세요. 새로운 사람들과 프로젝트 기회를 만드는 시작입니다.</p>
    </TutorialSection>
</SectionWrapper>
<SectionWrapper>
    <CommunityEventsSection>
        <h2 class="section-title">allius의 커뮤니티 이벤트에 참여하세요.</h2>
        <Seperator 
            borderColor="#1ecce4"
            borderWidth=6
            seperatorWidth="80px"
            paddingTop=40
            paddingBottom=20
        />
    </CommunityEventsSection>
</SectionWrapper>
<Footer />


<style lang="scss">
    @import 'assets/scss/common.scss'; 

    .cover-image {
        display: block;
        width: 100%;
        height: 400px;
        background-position: center;
        background-repeat: none;
        background-size: cover;

        @include respond-to('w800'){
            height: 320px;
        }

        @include respond-to('w600'){
            height: 240px;
        }
    }

    .section-title {
        text-align: center;
        font-size: 1.2em;
        font-weight: 700;
        color: var(--theme-color1);
    }

    .section-description {
        text-align: center;
        font-size: 0.8em;
        color: var(--sub-color1);
        margin-top: 6px;

        @include respond-to('w600') {
            width: 100%;
        }
    }

    :global(.sections::-webkit-scrollbar) {
        display: none;
    }

    :global(img.allius-loading-gif) {
        width: 3000px;
        height: 80px;
        object-fit: cover;
        display: block;
        margin: 20px auto;
    }

</style>