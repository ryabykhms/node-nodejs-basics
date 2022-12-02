import { writeFile } from "fs/promises";
import {
  FS_FILE_ALREADY_EXISTS_CODE,
  FS_OPERATION_ERROR_MESSAGE,
  getPath,
} from "./utils/index.js";

const create = async () => {
  const filename = "fresh.txt";
  const content = "I am fresh and young";
  const dir = "files";
  const filePath = getPath(import.meta.url, dir, filename);

  try {
    await writeFile(filePath, content, { flag: "wx" });
  } catch (e) {
    if (e.code === FS_FILE_ALREADY_EXISTS_CODE) {
      throw new Error(FS_OPERATION_ERROR_MESSAGE);
    }
  }
};

await create();
