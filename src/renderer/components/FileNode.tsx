import React from 'react';
import { Handle, Position } from 'reactflow';
import type { FileNode as FileNodeType } from '../data/mockData';

interface FileNodeProps {
  data: {
    fileData: FileNodeType;
    onClick: (fileData: FileNodeType) => void;
  };
}

export const FileNode: React.FC<FileNodeProps> = ({ data }) => {
  const { fileData, onClick } = data;
  const isFile = fileData.type === 'file';
  
  const handleClick = () => {
    if (isFile) {
      onClick(fileData);
    }
  };

  return (
    <div
      className={`
        px-4 py-2 rounded-lg border-2 shadow-md min-w-[120px] text-center
        ${isFile 
          ? 'bg-blue-50 border-blue-300 hover:bg-blue-100 cursor-pointer' 
          : 'bg-yellow-50 border-yellow-300'
        }
        ${isFile ? 'hover:border-blue-500' : ''}
        transition-all duration-200
      `}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center space-x-2">
        <span className="text-lg">
          {isFile ? '📄' : '📁'}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {fileData.name}
        </span>
      </div>
      
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 !bg-gray-400"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 !bg-gray-400"
      />
    </div>
  );
};