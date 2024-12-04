import { useEffect, useState } from "react";

export default function LoginPage() {
  const [res, setRes] = useState();

  useEffect(() => {
    async function callApi() {
      const data = await login({
        email: "ahmedsenousy01@gmail.com",
        password: "test123"
      });
      setRes(data);
    }
    callApi();
  }, []);

  return (
    <div className="flex size-full items-center justify-center text-3xl">
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  );
}

async function login({ email, password }: { email: string; password: string }) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );
  return await response.json();
}
