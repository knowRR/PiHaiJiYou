<style>
    @font-face {
        font-family: KouzanMouhituFont;
        src:local("KouzanMouhituFont"),
            url("../assets/KouzanMouhituFont.woff2") format("woff2");
    }
</style>

<script lang='ts'>
    // import introduction from '../lib/address.svelte';
    import {main, img, talkCss, title, link, linkWord} from './pages.style'
    import body from '../assets/body.png';
    let index : number = 0;
    // let words = introduction
    // $: show = words[i]
</script>


<title>裨海紀遊</title>
<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<p class={title}>裨海紀遊</p>
<div class={main}>
    <img class={img} src={body} />
    <div class={talkCss}>
        我啊，很喜歡四處遊覽，本來還對於沒辦法去臺灣感到惋惜，殊不知丙子年的大火讓我有機會跟著採硫磺的團隊來到臺灣，真是開心！
    </div>
</div>
<a class={link} href="./oldAndNow"><span class={linkWord}>進入</span>➤</a>