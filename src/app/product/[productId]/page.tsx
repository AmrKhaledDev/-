import Link from "next/link";
import ProductDetails from "./_components/ProductDetails/ProductDetails";
import ProductOpinions from "./_components/ProductOpinions/ProductOpinions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { GetUserSessionWithRelations } from "@/lib/Sessions/GetUserSessionWithRelations";
// ========================================================
async function Product({ params }: { params: Promise<{ productId: string }> }) {
  const userSession = await GetUserSessionWithRelations();
  const { productId } = await params;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      productImages: true,
      category: true,
    },
  });
  if (!product) return redirect("/categories");
  return (
    <main className="section-p text-white">
      <div className="mycontainer flex flex-col gap-10">
        {!userSession && (
          <Link
            href={"/login"}
            className="bg-white/5 ring ring-red-500/20 text-red-500 py-2 px-5 rounded text-sm text-center"
          >
            سجل الدخول لترك رأيك عن هذا المنتج
          </Link>
        )}
        <ProductDetails product={product} userSession={userSession} />
        {/* <ProductOpinions users={product.users} userSession={userSession} /> */}
      </div>
    </main>
  );
}

export default Product;
