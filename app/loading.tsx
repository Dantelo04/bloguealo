import { Loader } from "@/components/Loader/Loader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-150px)]">
      <Loader />
    </div>
  );
}