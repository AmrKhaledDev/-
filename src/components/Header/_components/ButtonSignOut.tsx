"use client";

import { signOut } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
// ================================================
function ButtonSignOut({
  setErrorInSignOut,
  setIsMenuOpen,
}: {
  setErrorInSignOut: Dispatch<SetStateAction<string>>;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.log(error);
      setErrorInSignOut("حدث خطأ أثناء تسجيل الخروج");
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      disabled={loading}
      onClick={handleSignOut}
      className="bg-red-500/20 not-disabled:hover:bg-red-500/40 mytransition not-disabled:cursor-pointer rounded-md py-2 text-white shadow"
    >
      {loading ? "جاري الخروج . . ." : " تسجيل الخروج"}
    </button>
  );
}

export default ButtonSignOut;
