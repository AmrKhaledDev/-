"use client";
function OpinionInput() {
  return (
    <div className="flex flex-1 items-center justify-between focus-within:border-gray-50/40 mytransition border border-gray-50/20 bg-white/5 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="اكتب رأيك"
        className="py-2 flex-1 px-2 outline-none text-white bg-transparent"
      />
      <button className="ring ring-gray-50/30 bg-white/5 py-2 px-6 z-15 cursor-pointer hover:bg-white/15 mytransition text-white">
        نشر
      </button>
    </div>
  );
}

export default OpinionInput;
