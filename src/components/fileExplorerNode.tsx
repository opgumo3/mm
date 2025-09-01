// src/components/FileExplorerNode.tsx
import React, { useState } from 'react';
import type { FileNode } from '../types';
import './fileExplorerNode.css';

interface FileExplorerNodeProps {
  node: FileNode;
  level: number; // 들여쓰기 수준을 위해 추가
}

const FileExplorerNode: React.FC<FileExplorerNodeProps> = ({ node, level }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (node.type === 'folder') {
      setIsOpen(!isOpen);
    }
  };

  const indentStyle = {
    paddingLeft: `${level * 20}px`, // 들여쓰기 (20px * level)
  };

  const isFolder = node.type === 'folder';
  const icon = isFolder
    ? (isOpen ? '📂' : '📁') // 열린 폴더 / 닫힌 폴더
    : '📄'; // 파일

  return (
    <div className={`file-node ${isFolder ? 'folder' : 'file'}`} style={indentStyle}>
      <span onClick={toggleOpen} className="node-name">
        {icon} {node.name}
      </span>
      {isFolder && isOpen && node.children && (
        <div className="children-container">
          {node.children.map((child) => (
            <FileExplorerNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorerNode;