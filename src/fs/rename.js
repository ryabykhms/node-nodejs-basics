import { access, rename as fsRename } from "fs/promises";
import { FS_OPERATION_ERROR_MESSAGE, getPath } from "./utils/index.js";

const rename = async () => {
  const dir = "files";
  const filename = "wrongFilename.txt";
  const newFilename = "properFilename.md";
  const filePath = getPath(import.meta.url, dir, filename);
  const newFilePath = getPath(import.meta.url, dir, newFilename);

  try {
    await access(filePath);
    await fsRename(filePath, newFilePath);
  } catch (e) {
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

await rename();
