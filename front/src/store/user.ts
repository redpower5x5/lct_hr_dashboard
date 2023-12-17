import { atom } from 'recoil';

export const userState = atom<{
  department: string | null
  email?: string
  id: number
  phone?: string
  role: string
  username: string
}>({
  key: 'user',
  default: {
    id: 0,
    department: null,
    email: '',
    phone: '',
    role: '',
    username: ''
  }
});
