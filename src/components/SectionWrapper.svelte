<script>
    export let className = "";

</script>

<div class="section-wrapper {className}">
    <slot></slot>
</div>

<style lang="scss">
    @import '../assets/scss/common.scss';

    .section-wrapper {
        background-color: white;
        max-width: $wrapper;
        margin: 0px auto 130px;
        padding: 0px 30px;
        font-size: $font-size;
        font-family: $font-kr;
        word-break: keep-all;

        &.section-top {
            margin-top: 120px;
            margin-bottom: 60px;

            @include respond-to('w800') {
                margin-top: 100px;
                margin-bottom: 40px;
            }

            @include respond-to('w600') {
                margin-top: 80px;
                margin-bottom: 30px;
            }
        }

        @include respond-to('w1000') {
            font-size: $font-size * 0.9;
        }

        @include respond-to('w800') {
            font-size: $font-size * 0.8;
            margin-bottom: 100px;
        }

        @include respond-to('w600') {
            padding: 0 12px;
            margin-bottom: 70px;
        }
/* 
        .section-title {
            font-size: 1em;
            font-weight: 700;
            color: $theme-color1;
        }

        .section-description {
            font-size: 0.8em;
            color: $sub-color1;
            margin-top: 6px;

            @include respond-to('w600') {
                width: 100%;
            }
        } */
    }

</style>