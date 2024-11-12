import { User } from "@/lib/types/responses/queries";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);
  const json = await res.json();
  return json;
};
