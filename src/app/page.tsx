import { fetchUsers } from "@/lib/api";
import UserCard from "@/components/UserCard";

export default async function HomePage() {
  let users;
  try {
    users = await fetchUsers();
  } catch (error) {
    return <div className="text-red-500 p-4">Ошибка загрузки пользователей</div>;
  }

  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}
