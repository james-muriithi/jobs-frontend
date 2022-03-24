module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Coding Jobs";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/partials/_variables.scss"; @import "@/assets/scss/partials/_colors.scss";`,
        sourceMap: true,
      },
    },
  },
};
