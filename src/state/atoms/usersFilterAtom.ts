import { atom } from "jotai";

interface UsersFilterType {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}

const usersFilterAtom = atom<UsersFilterType | undefined>(undefined);

export default usersFilterAtom;
