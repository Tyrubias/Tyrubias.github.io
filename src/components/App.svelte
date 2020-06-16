<script>
    import Router from "svelte-spa-router"

    import Home from "./Home.svelte"
    import Experience from "./Experience.svelte"
    import Projects from "./Projects.svelte"
    import Education from "./Education.svelte"
    import Contact from "./Contact.svelte"

    const routes = {
        "/": Home,
        "/experience": Experience,
        "/projects": Projects,
        "/education": Education,
        "/contact": Contact,
    }
</script>

<Router {routes} />
