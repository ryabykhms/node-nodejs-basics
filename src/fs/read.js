import { readFile } from "fs/promises";
import { FS_OPERATION_ERROR_MESSAGE, getPath } from "./utils/index.js";

const read = async () => {
  const dir = "files";
  const filename = "fileToRead.txt";
  const filePath = getPath(import.meta.url, dir, filename);

  try {
    const content = await readFile(filePath, "utf8");
    console.log(content);
  } catch {
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

await read();
