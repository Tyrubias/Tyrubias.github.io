<script>
    import profile_webp from "../images/VictorSong.webp"
    import profile_png from "../images/VictorSong.png"

    import TopBar from "../components/TopBar"
    import Gutter from "../components/Gutter"
</script>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;
        margin: auto;
        width: 75%;
    }

    source {
        width: 20vw;
    }

    img {
        width: 20vw;
        margin: 6vh 5vw 6vh 5vw;
    }
</style>

<TopBar />

<div>
    <picture>
        <source srcset={profile_webp} type="image/webp" />
        <source srcset={profile_png} type="image/png" />
        <img src={profile_png} style="width: 15vw" alt="Profile" />
    </picture>

    <p>
        I'm a rising junior at Rice University looking for full-stack
        development, data science, and systems engineering internships. I enjoy
        working in fast-paced team environments with a continuous learning
        mindset and rigorous team feedback. I aim to use interdisciplinary
        thinking to create innovative tools which benefit the social good and
        solve outstanding problems.
        <br />
        <br />
        In April 2020, I became a mobile and web developer at
        <a href="https://minimap.us/">Minimap</a>
        , a location-based social media network that aims to connect people
        based on events of mutual interest. I'm also doing research analyzing
        data on wearable devices as part of the
        <a href="https://pathsup.org/">PATHS-UP</a>
        (Precise Advanced Technologies and Health Systems for Underserved
        Populations) REU (research experience for undergraduates) at Rice
        University.
        <br />
        <br />
        Between April 2019 and April 2020, I was the treasurer and a team lead
        at riceapps, an application development organization at Rice University
        that builds software for community partners. You can find our work and
        contact us at
        <a href="http://www.riceapps.org/">riceapps.org</a>
        .
        <br />
        <br />
        In my free time, I enjoy dancing (both k-pop and hip-hop
        choreographies!), reading, and experimenting with cool tech. I'm the
        team manager for BASYK, a dance club at Rice University. You can find
        our YouTube channel
        <a href="https://www.youtube.com/channel/UCGDQyIZpxF4mv8ZUDif5ohg">
            here
        </a>
        .
    </p>
</div>

<Gutter />
