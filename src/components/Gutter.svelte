<script>
    import github_png from "../images/github.png"
    import github_webp from "../images/github.webp"

    import gmail_png from "../images/gmail.png"
    import gmail_webp from "../images/gmail.webp"

    import protonmail_png from "../images/protonmail.png"
    import protonmail_webp from "../images/protonmail.webp"
</script>

<style>
    div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        width: 20vw;
        margin: 10vh 40vw auto 40vw;
    }

    a {
        background: none;
    }
</style>

<div>
    <a href="mailto:vms2@rice.edu">
        <picture>
            <source srcset={gmail_webp} type="image/webp" />
            <source srcset={gmail_png} type="image/png" />
            <img src={gmail_png} style="width: 2vw" alt="Profile" />
        </picture>
    </a>
    <a href="mailto:vsong@pm.me">
        <picture>
            <source srcset={protonmail_webp} type="image/webp" />
            <source srcset={protonmail_png} type="image/png" />
            <img src={protonmail_png} style="width: 1.25vw" alt="Profile" />
        </picture>
    </a>
    <a href="https://github.com/Tyrubias">
        <picture>
            <source srcset={github_webp} type="image/webp" />
            <source srcset={github_png} type="image/png" />
            <img src={github_png} style="width: 1.75vw" alt="Profile" />
        </picture>
    </a>
</div>
