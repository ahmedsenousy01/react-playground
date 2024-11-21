import Card from "./components/card";
import { userData } from "./constants";

export default function App() {
  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center gap-3 py-8">
            {userData.map(data => (
              <Card
                key={data.id}
                product={data}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
