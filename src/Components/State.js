import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-cente text-3xl mt-10">
        <div className="mb-8">Count {count}</div>

        <button
          onClick={() => setCount(count + 1)}
          className="border border-red-200 px-4 p-2 hover:bg-gray-50"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="border border-red-200 px-4 p-2 hover:bg-gray-50"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="border border-red-200 px-4 p-2 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default State;
