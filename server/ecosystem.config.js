module.exports = {
    apps: [
      {
        name: "WorkFlow",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };