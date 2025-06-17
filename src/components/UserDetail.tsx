import { User } from "@/types/user";

interface Props {
    user: User;
}

export default function UserDetail({ user }: Props) {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <h2 className="mt-4 font-semibold">Address</h2>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>

            <h2 className="mt-4 font-semibold">Company</h2>
            <p>{user.company.name}</p>
            <p><em>{user.company.catchPhrase}</em></p>
        </div>
    );
}