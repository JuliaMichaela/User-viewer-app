import { User } from "@/types/user";

const API_BASE = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch(`${API_BASE}/users`);
    if (!res.ok) throw new Error("Ошибка загрузки пользователей");
    return res.json();
}

export async function fetchUser(id: string): Promise<User> {
    const res = await fetch(`${API_BASE}/users/${id}`);
    if (!res.ok) throw new Error("Пользователь не найден");
    return res.json();
}