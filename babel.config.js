module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
          alias: {
            constants: "./src/constants",
            components: "./src/components",
            screen: "./src/screen",
            text: "./src/text",
            images: "./src/images",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
