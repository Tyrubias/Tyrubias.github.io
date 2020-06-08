<script>
    import { Link } from "svelte-routing"
</script>

<style>
    #fancyname {
        font-family: "IBM Plex Sans";
        text-align: center;
        font-size: 10vh;
    }

    #menu {
        margin: auto;
        width: 65%;
        font-family: "IBM Plex Sans";
        text-align: center;
        font-size: 3vh;
    }
    @media only screen and (max-width: 600px) {
        #menu ul {
            background-color: #333;
            display: flex;
            flex-flow: column nowrap;
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

<div id="fancyname">
    <Link to="/">Victor Song</Link>
</div>

<div id="menu">
    <ul>
        <li>
            <Link to="/experience">Experience</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/education">Education</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
</div>
