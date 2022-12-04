import { fork } from "child_process";
import { getPath } from "../fs/utils/index.js";

const spawnChildProcess = async (args) => {
  const dir = "files";
  const filename = "script.js";
  const scriptPath = getPath(import.meta.url, dir, filename);
  fork(scriptPath, args);
};

spawnChildProcess(["open", "start"]);
