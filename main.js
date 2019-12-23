const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow,
  loadingScreen = null;
let windowParams = {
  width: 1440,
  height: 810,
  show: false,
  frame: true
};

function createWindow() {
  mainWindow = new BrowserWindow(windowParams);

  mainWindow.loadFile(path.resolve(__dirname, "app/index.html"));

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.show();

    if (loadingScreen) {
      // let loadingScreenBounds = loadingScreen.getBounds();
      // mainWindow.setBounds(loadingScreenBounds);
      loadingScreen.close();
    }
  });

  mainWindow.on("closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}

function createLoadingScreen() {
  loadingScreen = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    parent: mainWindow,
    frame: false
  });
  loadingScreen.loadFile(path.resolve(__dirname, "src/startScreen.html"));
  loadingScreen.on("closed", () => {
    loadingScreen = null;
  });
  loadingScreen.webContents.on("did-finish-load", () => {
    loadingScreen.show();
  });
}

app.on("ready", () => {
  createLoadingScreen();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
