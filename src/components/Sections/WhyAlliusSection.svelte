<script>

</script>

<div class="why-wrapper">
    <slot></slot>
    <ul>
        <li>
            <!-- svelte-ignore missing-declaration -->
            <img alt="allius benefit img1" src="{myProcess.env.IMG_URL}/static-images/landing-img01.jpg">
            <p>당신의 프로젝트 경험으로 새로운 사람들과 새로운 프로젝트 기회를 가질 수 있도록 기회의 멍석을 깔아드립니다.</p>
        </li>
        <li>
            <!-- svelte-ignore missing-declaration -->
            <img alt="allius benefit img2" src="{myProcess.env.IMG_URL}/static-images/landing-img02.jpg">
            <p>얼라이어스와 함께 새로운 길을 발견하고 실행하며 영역을 확장하도록 지원하고, 응원합니다!</p>
        </li>
    </ul>
</div>

<style lang="scss">
    @import 'assets/scss/common.scss'; 

    .why-wrapper {
        background-color: var(--sub-color1);
        max-width: var(--wrapper);
        margin: 0 auto;
        padding: 0 30px;

        @include respond-to('w600') {
            padding: 0 12px;
        }

        ul {
            display: flex;
            margin-top: 10px;

            @include respond-to('w600') {
                flex-direction: column;
            }

            li {
                margin-right: 20px;

                &:last-child {
                    margin-right : 0;
                }

                @include respond-to('w600') {
                    margin: 30px 0 0;
                }

                img {
                    display: block;
                    width: 100%;
                    border-radius: 6px;

                    @include respond-to('w600') {
                        width: 70%;
                        margin: 0 auto;
                    }

                    @include respond-to('w400') {
                        width: 100%;
                        margin: 0 auto;
                    }
                }

                p {
                    font-size: 0.8em;
                    color: white;
                    padding: 6px;

                    @include respond-to('w600') {
                        padding: 12px 0;
                    }
                }
            }
        }
    }
</style>