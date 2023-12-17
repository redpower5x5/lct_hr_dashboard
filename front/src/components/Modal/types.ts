import type ReactModal from 'react-modal';

export interface ModalProps extends Omit<ReactModal.Props, 'className' | 'overlayClassName'> {
  title?: string
}
