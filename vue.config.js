module.exports = {
  devServer: {
    port: 11000,
    host: "localhost",
  },
  publicPath: "/",
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/scss/styles.scss";
        @import "~@/assets/scss/fonts.scss";
        `,
      },
    },
  },
};
