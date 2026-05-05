import { Search } from "lucide-react";
import Link from "next/link";
// =======================================
function TopResult({ search }: { search: string }) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(search)}`}
      className="p-3 flex mytransition items-center gap-3 cursor-pointer bg-indigo-500 hover:bg-indigo-800 text-white"
    >
      <Search className="bg-blue-100 shadow text-blue-500 p-2 size-9 rounded-md" />
      <div className="flex flex-col items-start">
        <h2>البحث المباشر عن</h2>
        <span className="font-bold text-[18px]">"{search}"</span>
      </div>
    </Link>
  );
}

export default TopResult;
