import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
// =================================================
function OpenSearchBar({
  setShowSearchBar,
}: {
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setShowSearchBar(true)}
      className="cursor-pointer buttonShowSearchBar"
    >
      <Search className="sm:size-5.5 size-4.5" />
    </button>
  );
}

export default OpenSearchBar;
