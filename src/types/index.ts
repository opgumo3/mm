export interface FileNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: FileNode[]; // 폴더일 경우 자식 노드를 가질 수 있음
}