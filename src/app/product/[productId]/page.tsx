import { prisma } from "@/lib/prisma";
import { GetUserSessionWithRelations } from "@/lib/Sessions/GetUserSessionWithRelations";
import Link from "next/link";
import { redirect } from "next/navigation";
import ProductDetails from "./_components/ProductDetails/ProductDetails";
import ProductOpinions from "./_components/ProductOpinions/ProductOpinions";
import { Metadata } from "next";
// ========================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  if (!productId)
    return { title: "المنتج غير موجود", description: "هذا المنتج غير موجود" };
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: { name: true, description: true },
  });
  if (!product)
    return { title: "المنتج غير موجود", description: "هذا المنتج غير موجود" };
  return {
    title: product.name,
    description: product.description,
    icons: "/fav-icon.png",
  };
}
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
            className="shadow ring ring-indigo-500/30 text-indigo-500 py-2 px-5 rounded text-sm text-center"
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
