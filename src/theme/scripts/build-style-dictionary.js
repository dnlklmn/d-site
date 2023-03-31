const StyleDictionaryPackage = require("style-dictionary");
const { registerTransforms } = require("@tokens-studio/sd-transforms");
const StyleDictionary = require("style-dictionary");

registerTransforms(StyleDictionary);

StyleDictionaryPackage.registerFormat({
  name: "css/variables",
  formatter: function (dictionary) {
    return `${this.selector} {\n${dictionary.allProperties
      .map((prop) => `  --${prop.name}: ${prop.value};`)
      .join("\n")}\n}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: "size/px",
  type: "value",
  transitive: true,

  matcher: (token) => ["fontWeights"].includes(token.type),
  transformer: (token) => (token.value === "Regular" ? 400 : 700),

  matcher: (token) =>
    ["fontSizes", "dimension", "borderRadius", "spacing"].includes(token.type),
  transformer: (token) => parseFloat(token.value) + "px",
});

["light", "dark", "typography"].map((theme) => {
  const themeVariables = StyleDictionary.extend({
    source: [`src/theme/token-transformation/${theme}.json`],
    include: [`src/theme/token-transformation/global.json`],
    platforms: {
      web: {
        transformGroup: "tokens-studio",
        transforms: ["attribute/cti", "name/cti/kebab", "size/px"],
        buildPath: "src/theme/",
        files: [
          {
            destination: `${theme}.css`,
            format: "css/variables",
            selector:
              theme === "dark" ? `:root[data-theme="${theme}"]` : `:root`,
            filter: ({ isSource }) => {
              return isSource;
            },
          },
        ],
      },
    },
  });
  themeVariables.cleanAllPlatforms();
  themeVariables.buildAllPlatforms();
});
