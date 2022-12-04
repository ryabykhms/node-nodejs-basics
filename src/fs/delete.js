import { rm } from "fs/promises";
import { FS_OPERATION_ERROR_MESSAGE, getPath } from "./utils/index.js";

const remove = async () => {
  const dir = "files";
  const filename = "fileToRemove.txt";
  const filePath = getPath(import.meta.url, dir, filename);

  try {
    await rm(filePath);
  } catch {
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

await remove();
