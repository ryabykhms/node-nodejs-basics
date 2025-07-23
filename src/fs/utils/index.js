import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

export const getPath = (importMetaUrl, ...paths) =>
  resolve(dirname(fileURLToPath(importMetaUrl)), ...paths);

export * from "./constants/errors.js";
