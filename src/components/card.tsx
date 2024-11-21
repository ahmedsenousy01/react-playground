import { useState } from "react";

interface CardProps {
  product: {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
  };
}

export default function Card({
  product: { title, category, imageUrl }
}: CardProps) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col gap-4 rounded-md border bg-white shadow-lg">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="size-full rounded-t-md object-cover"
      />

      {/* Title and Category */}
      <div className="px-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{category}</p>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-center gap-8">
        <button
          className="text-3xl"
          onClick={() => setCounter(prev => prev - 1)}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          className="text-3xl"
          onClick={() => setCounter(prev => prev + 1)}
        >
          +
        </button>
      </div>

      {/* Delete Item Button */}
      <div className="p-3">
        <button className="w-full rounded-md bg-red-400 p-2">
          Delete Item
        </button>
      </div>
    </div>
  );
}
