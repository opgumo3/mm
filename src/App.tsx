import './App.css';
import { fileSystemData } from './data/fileSystemData';
import FileExplorerNode from './components/fileExplorerNode';

function App() {
  return (
    <div className="App">
      <h1>My File Explorer 📂</h1>
      <div className="file-explorer-container">
        <FileExplorerNode node={fileSystemData} level={0} />
      </div>
    </div>
  );
}

export default App;