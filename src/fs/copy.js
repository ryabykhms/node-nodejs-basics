import { copyFile, mkdir, readdir, rmdir } from "fs/promises";
import { resolve } from "path";
import {
  FS_FILE_NOT_EXISTS_CODE,
  FS_OPERATION_ERROR_MESSAGE,
  getPath,
} from "./utils/index.js";

const handleDirEntryCopy = async (dirEntry, src, dest) => {
  const newSrc = resolve(src, dirEntry.name);
  const newDest = resolve(dest, dirEntry.name);

  if (dirEntry.isFile()) {
    await copyFile(newSrc, newDest);
    return;
  }

  await mkdir(newDest);
  deepCopy(newSrc, newDest);
};

const deepCopy = async (src, dest) => {
  const dirEntries = await readdir(src, { withFileTypes: true });

  for (const dirEntry of dirEntries) {
    await handleDirEntryCopy(dirEntry, src, dest);
  }
};

const copy = async () => {
  const srcDir = "files";
  const destDir = `${srcDir}_copy`;
  const srcPath = getPath(import.meta.url, srcDir);
  const destPath = getPath(import.meta.url, destDir);

  try {
    await mkdir(destPath);
    await deepCopy(srcPath, destPath);
  } catch (e) {
    e.code === FS_FILE_NOT_EXISTS_CODE && (await rmdir(destPath));
    throw new Error(FS_OPERATION_ERROR_MESSAGE);
  }
};

copy();
