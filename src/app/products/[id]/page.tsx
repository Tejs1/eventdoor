import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // const product = await api.product.getById.query({
  //   id: parseInt(params.id),
  // });
  const product = await api.products.getById({
    id: parseInt(params.id),
  });

  if (!product[0]) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Image
            src={product[0].image}
            alt={product[0].name}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{product[0].name}</h1>
          <p className="mt-4 text-gray-600">{product[0].description}</p>

          <a
            href={`https://wa.me/your-number?text=I'm interested in ${product[0].name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-green-500 px-8 py-3 text-white hover:bg-green-600"
          >
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
