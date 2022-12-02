const parseEnv = () => {
  const parsedEnv = Object.keys(process.env).reduce(
    (prev, envKey) =>
      envKey.startsWith("RSS_")
        ? `${prev} ${envKey}=${process.env[envKey]};`
        : prev,
    ""
  );

  console.log(parsedEnv.slice(0, -1));
};

parseEnv();
