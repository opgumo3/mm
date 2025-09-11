export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  content?: string;
  children?: FileNode[];
}

export const mockFileTree: FileNode = {
  id: 'root',
  name: 'project',
  type: 'folder',
  path: '/project',
  children: [
    {
      id: 'src',
      name: 'src',
      type: 'folder',
      path: '/project/src',
      children: [
        {
          id: 'app',
          name: 'App.tsx',
          type: 'file',
          path: '/project/src/App.tsx',
          content: `import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;`
        },
        {
          id: 'components',
          name: 'components',
          type: 'folder',
          path: '/project/src/components',
          children: [
            {
              id: 'button',
              name: 'Button.tsx',
              type: 'file',
              path: '/project/src/components/Button.tsx',
              content: `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
};`
            },
            {
              id: 'header',
              name: 'Header.tsx',
              type: 'file',
              path: '/project/src/components/Header.tsx',
              content: `import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">My App</h1>
    </header>
  );
};`
            }
          ]
        },
        {
          id: 'utils',
          name: 'utils',
          type: 'folder',
          path: '/project/src/utils',
          children: [
            {
              id: 'helpers',
              name: 'helpers.ts',
              type: 'file',
              path: '/project/src/utils/helpers.ts',
              content: `export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};`
            }
          ]
        }
      ]
    },
    {
      id: 'package',
      name: 'package.json',
      type: 'file',
      path: '/project/package.json',
      content: `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`
    },
    {
      id: 'readme',
      name: 'README.md',
      type: 'file',
      path: '/project/README.md',
      content: `# My App

This is a sample React application.

## Getting Started

1. Install dependencies: \`npm install\`
2. Start the development server: \`npm start\`

## Features

- React components
- TypeScript support
- Modern styling`
    }
  ]
};