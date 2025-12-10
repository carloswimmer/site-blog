import Image from "next/image";

export default function Posts() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-100 mb-8">Posts</h2>
      <Image src="/assets/field.jpeg" alt="Field" width={600} height={400} />
    </div>
  );
}
