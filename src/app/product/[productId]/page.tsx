import { prisma } from "@/lib/prisma";
import { GetUserSessionWithRelations } from "@/lib/Sessions/GetUserSessionWithRelations";
import Link from "next/link";
import { redirect } from "next/navigation";
import ProductDetails from "./_components/ProductDetails/ProductDetails";
import ProductOpinions from "./_components/ProductOpinions/ProductOpinions";
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
      opinions: {
        include: {
          user: true,
          likes: {
            include: {
              user: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
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
        <ProductOpinions
          opinions={product.opinions}
          userSession={userSession}
          productId={product.id}
        />
      </div>
    </main>
  );
}

export default Product;
