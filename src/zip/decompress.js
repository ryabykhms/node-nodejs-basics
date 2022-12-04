import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { createUnzip } from "zlib";
import { getPath } from "../fs/utils/index.js";

const pipe = promisify(pipeline);

const decompress = async () => {
  const dir = "files";
  const srcFilename = "archive.gz";
  const destFilename = "fileToCompress.txt";
  const srcPath = getPath(import.meta.url, dir, srcFilename);
  const destPath = getPath(import.meta.url, dir, destFilename);
  const unzip = createUnzip();
  const srcStream = createReadStream(srcPath);
  const destStream = createWriteStream(destPath);
  await pipe(srcStream, unzip, destStream);
};

await decompress();
