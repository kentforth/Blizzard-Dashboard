module.exports = {
  devServer: {
    port: 11050
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/scss/styles.scss";
        @import "~@/assets/scss/fonts.scss";
        `
      },
    },
  }
};
