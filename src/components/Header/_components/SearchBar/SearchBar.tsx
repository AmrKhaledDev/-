"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SearchBarInput from "./_components/SearchBarInput";
import CloseSearchBar from "./_components/CloseSearchBar";
import OpenSearchBar from "./_components/OpenSearchBar";
import Results from "./_components/Results";
// ==============================
function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [search,setSearch] = useState("")
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState({})
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
      <OpenSearchBar setShowSearchBar={setShowSearchBar} />
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
            <div className="w-[65%] relative">
              <SearchBarInput search={search} setSearch={setSearch}/>
              <Results />
            </div>
            <CloseSearchBar setShowSearchBar={setShowSearchBar} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default SearchBar;
