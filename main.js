const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const startPriceServer = () => {
    const script = path.join(__dirname, 'price_server.py');
    if (!fs.existsSync(script)) return;
    const child = spawn('python', [script], {
        cwd: __dirname,
        detached: true,
        stdio: 'ignore',
        windowsHide: true,
    });
    child.on('error', () => {});
    child.unref();
};

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 900,
        minWidth: 900,
        minHeight: 700,
        title: '수집뱅크 통합 검색기 v3.0',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
        },
    });

    win.loadFile(path.join(__dirname, 'app', 'index.html'));

    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
};

app.whenReady().then(() => {
    startPriceServer();
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
