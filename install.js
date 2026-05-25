module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          // xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: "uv pip install -r requirements.txt"
      }
    }
  ]
}
