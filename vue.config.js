module.exports = {
  devServer: {
    port: 11000,
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
