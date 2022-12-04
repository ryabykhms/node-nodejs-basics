import { cpus } from "os";
import { Worker } from "worker_threads";
import { getPath } from "../fs/utils/index.js";

const performCalculations = async () => {
  const workerFilePath = getPath(import.meta.url, "worker.js");
  const logicalCpuCores = cpus();
  const initialWorkerData = 10;

  const promises = await Promise.allSettled(
    logicalCpuCores.map(
      (_, index) =>
        new Promise((resolve, reject) => {
          const workerData = initialWorkerData + index + 1;
          const worker = new Worker(workerFilePath, { workerData });
          worker.on("message", (value) => resolve(value));
          worker.on("error", (e) => reject(e));
        })
    )
  );

  const result = promises.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(result);
};

await performCalculations();
