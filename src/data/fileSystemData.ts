import type { FileNode } from '../types';

export const fileSystemData: FileNode = {
  id: 'root',
  name: 'My Drive',
  type: 'folder',
  children: [
    {
      id: 'docs-1',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: 'report-1', name: 'Annual Report 2023.docx', type: 'file' },
        { id: 'pres-1', name: 'Q1 Presentation.pptx', type: 'file' },
        {
          id: 'proj-folder-1',
          name: 'Projects',
          type: 'folder',
          children: [
            { id: 'spec-1', name: 'Project X Spec.pdf', type: 'file' },
            { id: 'code-1', name: 'main.ts', type: 'file' },
          ],
        },
      ],
    },
    {
      id: 'media-2',
      name: 'Media',
      type: 'folder',
      children: [
        { id: 'photo-1', name: 'Vacation Photo.jpg', type: 'file' },
        { id: 'video-1', name: 'Family Trip.mp4', type: 'file' },
      ],
    },
    { id: 'readme-3', name: 'README.md', type: 'file' },
    { id: 'config-4', name: '.env', type: 'file' },
  ],
};