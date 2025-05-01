"use client";

const TestComponent = () => {
  const handleClick = () => {
    throw new Error("This is a test error");
  };
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleClick}
      >
        Click this to trigger an error
      </button>
    </div>
  );
};
export default TestComponent;
