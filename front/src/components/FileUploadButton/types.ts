import { type ChangeEvent } from 'react';

export interface FileUploadButtonProps {
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void
  accept: string
  name: string
}
