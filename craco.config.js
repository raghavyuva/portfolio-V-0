module.exports = {
  style: {
    postcss: {
      purge: {
        options: {
          safelist: [/data-theme$/],
        },
      },
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
