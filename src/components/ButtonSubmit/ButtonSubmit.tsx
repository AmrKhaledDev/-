"use client";
function ButtonSubmit({
  buttonName,
  loading,
}: {
  buttonName: string;
  loading: boolean;
}) {
  return (
    <button
      disabled={loading}
      className="py-2 w-full disabled:cursor-default flex items-center justify-center not-disabled:active:scale-95 mytransition bg-linear-to-r from-indigo-700 to-pink-700 shadow disabled:from-indigo-300 disabled:to-pink-300 not-disabled:hover:from-indigo-500  not-disabled:hover:to-pink-500 rounded-md cursor-pointer my-3"
    >
      {loading ? (
        <div className="border-3 border-white rounded-full border-t-transparent animate-spin size-5" />
      ) : (
        buttonName
      )}
    </button>
  );
}

export default ButtonSubmit;
