import { existsSync } from "fs";
import { rename as fsRename } from "fs/promises";
import { FS_OPERATION_ERROR_MESSAGE, getPath } from "./utils/index.js";

// I use `existsSync` instead of `access` because `access` is not recommended when we use open/write/read operations after
// see https://nodejs.org/api/fs.html#fspromisesaccesspath-mode
const checkFileAlreadyRenamed = (filePath) => {
  if (existsSync(filePath)) {
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

const rename = async () => {
  const dir = "files";
  const filename = "wrongFilename.txt";
  const newFilename = "properFilename.md";
  const filePath = getPath(import.meta.url, dir, filename);
  const newFilePath = getPath(import.meta.url, dir, newFilename);

  try {
    checkFileAlreadyRenamed(newFilePath);
    await fsRename(filePath, newFilePath);
  } catch (e) {
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

await rename();
