// 读取 package.json 中 dependencies 和 devDependencies 中的模块,取出 rf- 开头的包名，并全部更新最新版本
const { execSync } = require("child_process");
const { dependencies, devDependencies } = require("./package.json");
const rfDependencies = dependencies
  ? Object.keys(dependencies).filter((item) => item.startsWith("rf-"))
  : [];
const rfDevDependencies = devDependencies
  ? Object.keys(devDependencies).filter((item) => item.startsWith("rf-"))
  : [];
const addLatest = (item) => `${item}@latest`;
const cmd = `pnpm update  ${rfDependencies
  .map((ele) => addLatest(ele))
  .join(" ")} -S`;
const cmdDev = `pnpm update  ${rfDevDependencies
  .map((ele) => addLatest(ele))
  .join(" ")} -D`;
console.log(`cmd`, cmd);
console.log(`cmdDev`, cmdDev);

if (rfDependencies.length) execSync(cmd, { stdio: "inherit" });
else console.log(`没有需要更新的生产依赖`);
if (rfDevDependencies.length) execSync(cmdDev, { stdio: "inherit" });
else console.log(`没有需要更新的开发依赖`);
