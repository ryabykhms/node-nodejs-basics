import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { createGzip } from "zlib";
import { getPath } from "../fs/utils/index.js";

const pipe = promisify(pipeline);

const compress = async () => {
  const dir = "files";
  const srcFilename = "fileToCompress.txt";
  const destFilename = "archive.gz";
  const srcPath = getPath(import.meta.url, dir, srcFilename);
  const destPath = getPath(import.meta.url, dir, destFilename);
  const gzip = createGzip();
  const srcStream = createReadStream(srcPath);
  const destStream = createWriteStream(destPath);
  await pipe(srcStream, gzip, destStream);
};

await compress();
