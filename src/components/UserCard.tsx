"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { User } from "@/types/user";

export default function UserCard({ user }: { user: User }) {
    return (
        <Card className="hover:shadow-lg transition">
            <CardContent className="p-4">
                <CardTitle>{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-sm">{user.company.name}</p>
                <Link
                    href={`/user/${user.id}`}
                    className="text-blue-600 mt-2 inline-block hover:underline"
                >
                    Подробнее →
                </Link>
            </CardContent>
        </Card>
    );
}