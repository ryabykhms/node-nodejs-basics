import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { getPath } from "../fs/utils/index.js";

const calculateHash = async () => {
  const dir = "files";
  const filename = "fileToCalculateHashFor.txt";
  const dirPath = getPath(import.meta.url, dir, filename);
  const fileContent = await readFile(dirPath, "utf-8");
  const hash = createHash("sha256");
  hash.update(fileContent);
  console.log(hash.digest("hex"));
};

await calculateHash();
