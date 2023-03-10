const StyleDictionaryPackage = require("style-dictionary");

function createArray({ dictionary }) {
  const arr = dictionary.allTokens;
  return JSON.stringify(arr);
}

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
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

  matcher: (token) =>
    ["fontSizes", "dimension", "borderRadius", "spacing"].includes(token.type),
  transformer: (token) => parseFloat(token.value) + "px",

  // matcher: (token) => ["fontWeights"].includes(token.type),
  // transformer: function (token) {
  //   return token.value === "Regular" ? 400 : 600;
  // },
});

function getStyleDictionaryConfig(theme, brand, sourcePath) {
  return {
    source: [`src/theme/token-transformation/${theme}.json`],
    include: [`src/theme/token-transformation/global.json`],
    format: {
      createArray,
    },
    platforms: {
      web: {
        // transformGroup: "css",
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
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS

const args = process.argv.slice(2);
const brand = args[0];
const sourcePath = args[1];

["dark", "light", "typography"].map(function (theme) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(theme, brand, sourcePath)
  );

  StyleDictionary.buildPlatform("web");

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
