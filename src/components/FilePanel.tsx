import React, { useEffect } from "react";
import type { FileNode } from "../data/mockData";

type Props = {
  fileData: FileNode;
  onClose: () => void;
};

export const FilePanel: React.FC<Props> = ({ fileData, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="absolute top-0 right-0 h-full w-96 bg-white shadow-lg border-l border-gray-300 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-800">{fileData.name}</h2>
        <button
          className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-400 hover:bg-gray-500 text-white transition-colors"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <span className="text-sm text-gray-500">Path: </span>
          <span className="text-sm font-mono">{fileData.path}</span>
        </div>
        
        {fileData.content ? (
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-700">Content:</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm font-mono overflow-auto max-h-96 text-gray-800 whitespace-pre-wrap">
              {fileData.content}
            </pre>
          </div>
        ) : (
          <p className="text-gray-500 italic">No content available</p>
        )}
      </div>
    </div>
  );
};
