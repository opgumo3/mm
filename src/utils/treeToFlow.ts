import type { Node, Edge } from 'reactflow';
import type { FileNode } from '../data/mockData';

export const convertTreeToFlow = (
  tree: FileNode,
  onNodeClick: (fileData: FileNode) => void
): { nodes: Node[], edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  const traverse = (
    node: FileNode, 
    x: number = 0, 
    y: number = 0, 
    level: number = 0,
    parentId?: string
  ) => {
    const nodeId = node.id;
    
    nodes.push({
      id: nodeId,
      type: 'fileNode',
      position: { x, y },
      data: {
        fileData: node,
        onClick: onNodeClick
      }
    });
    
    if (parentId) {
      edges.push({
        id: `${parentId}-${nodeId}`,
        source: parentId,
        target: nodeId,
        type: 'smoothstep'
      });
    }
    
    if (node.children && node.children.length > 0) {
      const childSpacing = 200;
      const startX = x - ((node.children.length - 1) * childSpacing) / 2;
      
      node.children.forEach((child, index) => {
        const childX = startX + (index * childSpacing);
        const childY = y + 150;
        
        traverse(child, childX, childY, level + 1, nodeId);
      });
    }
  };
  
  traverse(tree);
  
  return { nodes, edges };
};