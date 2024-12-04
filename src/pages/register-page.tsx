import { useEffect, useState } from "react";

export default function RegisterPage() {
  const [res, setRes] = useState();

  useEffect(() => {
    async function callApi() {
      const data = await register({
        name: "ahmed",
        email: "ahmedsenousy01@gmail.com",
        password: "test123",
        rePassword: "test123",
        phone: "01111111111"
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

async function register({
  name,
  email,
  password,
  rePassword,
  phone
}: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        rePassword,
        phone
      })
    }
  );
  return await response.json();
}
