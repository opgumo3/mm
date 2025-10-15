import { useState, useCallback, useMemo } from "react";
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    type NodeChange,
    type EdgeChange,
    type Connection,
} from "reactflow";
import "reactflow/dist/style.css";

import { FileNode } from "../components/FileNode";
import { FilePanel } from "../components/FilePanel";
import { mockFileTree } from "../data/mockData";
import type { FileNode as FileNodeType } from "../data/mockData";
import { convertTreeToFlow } from "../utils/treeToFlow";

const nodeTypes = {
    fileNode: FileNode,
};

function MindMap() {
    const [selectedFile, setSelectedFile] = useState<FileNodeType | null>(null);

    const handleNodeClick = useCallback((fileData: FileNodeType) => {
        if (fileData.type === 'file') {
            setSelectedFile(fileData);
        }
    }, []);

    const handleClosePanel = useCallback(() => {
        setSelectedFile(null);
    }, []);

    const { nodes: initialNodes, edges: initialEdges } = useMemo(
        () => convertTreeToFlow(mockFileTree, handleNodeClick),
        [handleNodeClick]
    );

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div className="app-container">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>

            {selectedFile && (
                <FilePanel fileData={selectedFile} onClose={handleClosePanel} />
            )}
        </div>
    );
}

export default MindMap;