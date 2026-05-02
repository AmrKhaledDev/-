import TopResult from "./TopResult";
import ProductsSuggestions from "./ProductsSuggestions";
import CategoriesSuggestions from "./CategoriesSuggestions";
// ======================================================
function Results() {
  return (
    <div className="absolute flex flex-col gap-4 shadow-2xl h-fit rounded-2xl ring ring-gray-400/10 mt-1 overflow-hidden bg-gray-50 w-full text-black">
      <TopResult />
      <span className="w-full h-px bg-white rounded-full block" />
      <ProductsSuggestions />
      <span className="w-full h-px bg-white rounded-full block" />
      <CategoriesSuggestions />
    </div>
  );
}

export default Results;
