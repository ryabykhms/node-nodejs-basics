const parseArgs = () => {
  const parsedArgs = process.argv.reduce(
    (prev, arg, index) => {
      const nextArg = process.argv[index + 1];
      const isRightArgPair = arg.startsWith("--") && nextArg;

      return isRightArgPair ? `${prev} ${arg.slice(2)} is ${nextArg},` : prev;
    },

    ""
  );

  console.log(parsedArgs.slice(0, -1));
};

parseArgs();
