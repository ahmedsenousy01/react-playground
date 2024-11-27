import { useParams } from "react-router";

export default function CustomIdPage() {
  const params = useParams();
  return (
    <div className="flex size-full items-center justify-center text-3xl">
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
