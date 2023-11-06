import kirklin from "@kirklin/eslint-config";
import unocss from "@unocss/eslint-plugin";

export default kirklin(
  {},
  unocss.configs.flat,
);
