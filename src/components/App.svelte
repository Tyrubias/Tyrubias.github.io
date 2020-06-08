<script context="module">
    import { register } from "svelte-loadable"

    const ContactLoader = register({
        loader: () => import("./Contact.svelte"),
        resolve: () => require.resolve("./Contact.svelte"),
    })

    const EducationLoader = register({
        loader: () => import("./Education.svelte"),
        resolve: () => require.resolve("./Education.svelte"),
    })

    const ExperienceLoader = register({
        loader: () => import("./Experience.svelte"),
        resolve: () => require.resolve("./Experience.svelte"),
    })

    const ProjectsLoader = register({
        loader: () => import("./Projects.svelte"),
        resolve: () => require.resolve("./Projects.svelte"),
    })

    const HomeLoader = register({
        loader: () => import("./Home.svelte"),
        resolve: () => require.resolve("./Home.svelte"),
    })
</script>

<script>
    import { Router, Route } from "svelte-routing"

    import Loadable from "svelte-loadable"

    export let url = ""
</script>

<Router {url}>
    <Route path="/contact">
        <Loadable loader={ContactLoader}>
            <div slot="loading">Loading...</div>
        </Loadable>
    </Route>
    <Route path="/education">
        <Loadable loader={EducationLoader}>
            <div slot="loading">Loading...</div>
        </Loadable>
    </Route>
    <Route path="/experience">
        <Loadable loader={ExperienceLoader}>
            <div slot="loading">Loading...</div>
        </Loadable>
    </Route>
    <Route path="/projects">
        <Loadable loader={ProjectsLoader}>
            <div slot="loading">Loading...</div>
        </Loadable>
    </Route>
    <Route path="/">
        <Loadable loader={HomeLoader}>
            <div slot="loading">Loading...</div>
        </Loadable>
    </Route>
</Router>
