import Image from "next/image";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const products = await api.products.getAll();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tech Event Merchandise
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Premium swag for your next tech event. Stand out with quality
            merchandise.
          </p>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-3xl font-bold">Our Products</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg bg-white shadow-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <div className="mt-4 flex justify-between">
                      <a
                        href={`https://wa.me/7666286890?text=I am interested in ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                      >
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
