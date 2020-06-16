<script>
    import { onMount } from "svelte"
    import { Link } from "svelte-routing"

    onMount(() => {
        var tag = document.querySelector(
            `a[href='${window.location.pathname}']`,
        )
        tag.style.backgroundColor = "cornflowerblue"
        tag.style.borderRadius = "0.5vw"
        tag.style.textDecoration = "underline"
    })
</script>

<style>
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
