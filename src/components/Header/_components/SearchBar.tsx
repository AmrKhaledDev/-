"use client";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// ==============================
function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".buttonShowSearchBar, .boxSearchBar"))
          setShowSearchBar(false);
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);
  return (
    <>
      <button onClick={() => setShowSearchBar(true)} className="cursor-pointer buttonShowSearchBar">
        <Search className="sm:size-5.5 size-4.5" />
      </button>
      {showSearchBar && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="fixed inset-0 bg-black/25 backdrop-blur flex justify-center z-55 "
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white px-10 py-7 h-fit w-full flex justify-center items-center gap-6 boxSearchBar"
          >
            <form className="w-[65%] focus-within:border-2 border pr-4 border-indigo-500 rounded-xl overflow-hidden flex h-14 items-center gap-2.5">
              <button>
                <Search className="text-gray-400 size-5" />
              </button>
              <span className="h-5 w-px block bg-black/5 rounded-full" />
              <input
                type="text"
                placeholder="ما الذي تبحث عنه؟"
                className="placeholder:text-gray-400 text-gray-400 flex-1 text-xl h-full outline-none"
              />
            </form>
            <button
              onClick={() => setShowSearchBar(false)}
              className="hover:bg-gray-100 p-2 rounded-full group mytransition"
            >
              <X className="text-black group-hover:rotate-180 mytransition" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default SearchBar;
