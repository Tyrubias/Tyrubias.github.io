<script>
    import Router from "svelte-spa-router"

    import Redirect from "./components/Redirect"

    import About from "./routes/About"
    import Experience from "./routes/Experience"
    import Projects from "./routes/Projects"
    import Education from "./routes/Education"

    const routes = {
        "/": Redirect,
        "/about": About,
        "/experience": Experience,
        "/projects": Projects,
        "/education": Education,
    }
</script>

<Router {routes} />
