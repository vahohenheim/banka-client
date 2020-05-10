module.exports = {
    plugins: [
        require("postcss-easy-import"),
        require("postcss-cssnext"),
        require('postcss-normalize'),
        require('postcss-custom-properties'),
        require('postcss-fontpath')({
            checkFiles: true,
        }),
    ],
}
  