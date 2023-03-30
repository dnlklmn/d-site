const tokens = require("../theme/token-transformation/light.json");

console.log("tokens: ", tokens);
console.log("keys: ", Object.keys(tokens));
console.log("values: ", Object.values(tokens));

export function Tokenizer() {
  return <span>{tokens}</span>;
}
