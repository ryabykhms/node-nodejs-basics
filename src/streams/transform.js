import { pipeline, Transform } from "stream";

const transform = async () => {
  const streamTransform = new Transform({
    transform: (chunk, encoding, callback) => {
      const chunkString = chunk.toString().trim();
      const reversedChunkString = chunkString.split("").reverse().join("");
      callback(null, `${reversedChunkString}\n`);
    },
  });

  pipeline(process.stdin, streamTransform, process.stdout, (e) => console.log(e));
};

await transform();
