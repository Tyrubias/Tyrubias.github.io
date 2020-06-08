const image = require("svelte-image")

module.exports = {
    preprocess: {
        ...image(),
    },
}
