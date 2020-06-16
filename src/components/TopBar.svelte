<script>
    import { link } from "svelte-spa-router"
    import active from "svelte-spa-router/active"
</script>

<style>
    :global(a.active) {
        background-color: cornflowerblue;
        border-radius: 0.6vw;
        text-decoration: underline;
    }

    #name {
        font-family: "Lato";
        text-align: center;
        font-size: 10vh;
    }

    #menu {
        margin: auto;
        width: 70%;
        font-family: "Lato";
        font-weight: 400;
        text-align: center;
        font-size: 4.5vh;
    }
    @media only screen and (max-width: 800px) {
        #menu ul {
            background-color: #333;
            display: flex;
            flex-flow: column nowrap;
            border-radius: 3vw;
        }

        ul li {
            margin-bottom: 2vw;
        }
    }
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        overflow: hidden;
        border-radius: 1vw;
        padding-left: 0.5vw;
        padding-right: 0.5vw;
        padding-top: 1vh;
        padding-bottom: 1vh;
        background-color: #333;
    }

    ul li {
        float: left;
    }
</style>

<div id="name">
    <a href="/" use:active>Victor Song</a>
</div>

<div id="menu">
    <ul>
        <li>
            <a href="/experience" use:link use:active>Experience</a>
        </li>
        <li>
            <a href="/projects" use:link use:active>Projects</a>
        </li>
        <li>
            <a href="/education" use:link use:active>Education</a>
        </li>
        <li>
            <a href="/contact" use:link use:active>Contact</a>
        </li>
    </ul>
</div>
