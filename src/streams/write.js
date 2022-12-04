import { createWriteStream } from "fs";
import { getPath } from "../fs/utils/index.js";

const write = async () => {
  const dir = "files";
  const filename = "fileToWrite.txt";
  const filePath = getPath(import.meta.url, dir, filename);
  const stream = createWriteStream(filePath);
  process.stdin.pipe(stream);
};

await write();
