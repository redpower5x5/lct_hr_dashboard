import { type ChangeEvent } from 'react';

export interface FileUploadButtonProps {
  onUpload: (e: ChangeEvent) => void
  accept: string
  name: string
}
