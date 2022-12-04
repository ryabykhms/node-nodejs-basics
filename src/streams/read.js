import { createReadStream } from "fs";
import { getPath } from "../fs/utils/index.js";

const read = async () => {
  const dir = "files";
  const filename = "fileToRead.txt";
  const filePath = getPath(import.meta.url, dir, filename);
  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();
