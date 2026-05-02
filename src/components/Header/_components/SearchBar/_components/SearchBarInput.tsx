"use client"
import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
// ======================================
function SearchBarInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full focus-within:border-2 border pr-4 border-indigo-500 rounded-xl overflow-hidden flex h-14 items-center gap-2.5">
      <button>
        <Search className="text-gray-400 size-5" />
      </button>
      <span className="h-5 w-px block bg-black/5 rounded-full" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="ما الذي تبحث عنه؟"
        className="placeholder:text-gray-400 text-gray-400 flex-1 text-xl h-full outline-none"
      />
    </div>
  );
}

export default SearchBarInput;
