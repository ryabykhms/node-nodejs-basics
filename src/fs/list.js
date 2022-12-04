import { readdir } from "fs/promises";
import { FS_OPERATION_ERROR_MESSAGE, getPath } from "./utils/index.js";

const list = async () => {
  const dir = "files";
  const dirPath = getPath(import.meta.url, dir);

  try {
    const files = await readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

await list();
