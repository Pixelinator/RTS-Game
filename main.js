const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 810
  });

  mainWindow.loadFile(path.resolve(__dirname, "app/index.html"));

  mainWindow.on("closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}

app.on("ready", createWindow);
