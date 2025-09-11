import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // 개발 환경: Vite의 개발 서버 URL을 로드
  win.loadURL('http://localhost:5173');
  // 빌드 환경: Vite가 빌드한 HTML 파일을 로드
  // win.loadFile('./index.html');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})