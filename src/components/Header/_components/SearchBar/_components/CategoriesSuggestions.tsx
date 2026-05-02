import Link from "next/link";
// ===========================================
function CategoriesSuggestions() {
  return (
    <div>
      <h2 className="text-gray-500 text-xs pr-3">الأصناف المقترحة</h2>
      <ul className="flex items-center gap-2 p-3">
        {["رجالي", "إلكترونيات", "ألعاب فيديو"].map((cat) => (
          <li key={cat}>
            <Link
              href={""}
              className="bg-white block py-1 px-3 rounded-full cursor-pointer text-gray-700 font-bold text-sm mytransition hover:shadow"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesSuggestions;
