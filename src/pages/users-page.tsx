import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function callApi() {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message as string);
      } finally {
        setLoading(false);
      }
    }

    callApi();
  }, []);

  if (loading)
    return (
      <div className="flex h-full items-center justify-center text-5xl">
        loading...
      </div>
    );

  if (error)
    return (
      <div className="flex h-full items-center justify-center text-5xl">
        {error}
      </div>
    );

  return (
    <div className="flex h-full flex-col items-center justify-center text-3xl">
      {users.map(user => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
  });

  const data = await response.json();
  return data as User[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
