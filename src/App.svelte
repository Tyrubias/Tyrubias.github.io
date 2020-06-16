<script>
    import Router from "svelte-spa-router"

    import Home from "./routes/Home"
    import Experience from "./routes/Experience"
    import Projects from "./routes/Projects"
    import Education from "./routes/Education"
    import Contact from "./routes/Contact"

    const routes = {
        "/": Home,
        "/experience": Experience,
        "/projects": Projects,
        "/education": Education,
        "/contact": Contact,
    }
</script>

<Router {routes} />
