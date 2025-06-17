import { notFound } from "next/navigation";
import { fetchUser } from "@/lib/api";
import UserDetail from "@/components/UserDetail";

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let user;
    try {
        user = await fetchUser(id);
    } catch {
        return notFound();
    }

    return <UserDetail user={user} />;
}