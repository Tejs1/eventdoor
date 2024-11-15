import Image from "next/image";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const products = await api.products.getAll();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="w-96 h-96 bg-white rounded-3xl flex-col justify-start items-start inline-flex">
  <div className="w-96 h-96 relative">
    <img className="w-96 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/1440x793" />
    <div className="left-[170px] top-[178px] absolute text-white text-9xl font-extrabold font-['Open Sans'] leading-10 tracking-wide">SWAGS</div>
    <img className="w-96 h-96 left-[368px] top-[115px] absolute" src="https://via.placeholder.com/704x663" />
  </div>
  <div className="self-stretch grow shrink basis-0 py-8 bg-white rounded-3xl flex-col justify-center items-center flex">
    <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
      <img className="w-48 h-12" src="https://via.placeholder.com/190x50" />
      <div className="justify-center items-center gap-8 flex">
        <div className="justify-start items-start flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-indigo-950 text-lg font-normal font-['DM Sans'] leading-tight">Home</div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-indigo-950 text-lg font-normal font-['DM Sans'] leading-tight">About</div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-indigo-950 text-lg font-normal font-['DM Sans'] leading-tight">Blog</div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-indigo-950 text-lg font-normal font-['DM Sans'] leading-tight">Swags</div>
            <div className="w-5 h-5 px-1 justify-center items-center flex" />
          </div>
        </div>
      </div>
      <div className="justify-end items-center gap-4 flex">
        <div className="justify-center items-center flex">
          <div className="px-6 py-4 bg-sky-700 rounded-3xl justify-center items-center gap-1 flex">
            <div className="text-center text-white text-base font-bold font-['DM Sans'] leading-none">Get started</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h-96 relative bg-white">
    <div className="w-72 h-80 left-[518px] top-[124px] absolute bg-stone-300 rounded" />
    <div className="w-72 h-80 left-[832px] top-[124px] absolute bg-stone-300 rounded" />
    <div className="w-72 h-80 left-[1146.40px] top-[124px] absolute">
      <div className="w-72 h-80 left-0 top-0 absolute bg-stone-300 rounded" />
      <div className="w-72 h-80 left-0 top-0 absolute bg-gray-200 rounded" />
    </div>
    <div className="left-[120px] top-[334px] absolute text-zinc-700 text-lg font-semibold font-['Open Sans']">See all product</div>
    <div className="w-96 left-[120px] top-[167px] absolute text-zinc-700 text-5xl font-bold font-['Open Sans']">Explore Our Top Categories</div>
    <div className="w-20 left-[1238px] top-[481px] absolute justify-between items-center inline-flex" />
  </div>
  <div className="h-96 relative bg-white">
    <div className="w-96 left-[425px] top-[65px] absolute text-center text-zinc-700 text-5xl font-bold font-['Open Sans']">Launch Your Brand with Event Door</div>
    <div className="w-72 h-72 left-[984px] top-[350px] absolute">
      <div className="w-72 h-72 left-0 top-0 absolute bg-white rounded-lg" />
      <div className="w-72 left-[1px] top-[154px] absolute text-center text-zinc-700 text-2xl font-bold font-['Open Sans'] leading-loose">Jacket<br/>Custom</div>
      <div className="w-14 h-16 left-[113px] top-[66px] absolute flex-col justify-center items-center inline-flex" />
    </div>
    <div className="w-72 h-72 left-[579px] top-[350px] absolute">
      <div className="w-72 h-72 left-0 top-0 absolute bg-sky-700 rounded-lg" />
      <div className="w-72 left-0 top-[154px] absolute text-center text-white text-2xl font-bold font-['Open Sans'] leading-loose">Tshirt<br/>Custom</div>
      <div className="w-16 h-16 left-[112px] top-[66px] absolute flex-col justify-center items-center inline-flex" />
    </div>
    <div className="w-72 h-72 left-[171px] top-[350px] absolute">
      <div className="w-72 h-72 left-0 top-0 absolute bg-white rounded-lg" />
      <div className="w-72 left-[1px] top-[154px] absolute text-center text-zinc-700 text-2xl font-bold font-['Open Sans'] leading-loose">Sweater<br/>Custom</div>
      <div className="w-16 h-16 left-[110px] top-[66px] absolute flex-col justify-center items-center inline-flex" />
    </div>
    <div className="w-96 left-[405px] top-[213px] absolute text-center text-neutral-400 text-lg font-semibold font-['Open Sans'] leading-loose">Get custom swag designed for your business, employees, or event attendees. High quality, on-brand, and hassle-free.</div>
  </div>
  <div className="h-96 relative bg-white">
    <div className="w-72 h-80 left-[120px] top-[290px] absolute bg-stone-300 rounded" />
    <div className="w-96 h-96 left-[425px] top-[72px] absolute bg-stone-300 rounded" />
    <div className="w-72 h-80 left-[933px] top-[290px] absolute bg-stone-300 rounded" />
    <div className="w-72 h-80 left-[1238px] top-[290px] absolute bg-stone-300 rounded" />
    <div className="left-[1155px] top-[224px] absolute text-zinc-700 text-lg font-semibold font-['Open Sans']">See all product</div>
    <div className="w-56 left-[120px] top-[132px] absolute text-zinc-700 text-5xl font-bold font-['Open Sans']">Our Best Sellers</div>
  </div>
  <div className="h-96 relative bg-white">
    <div className="w-96 h-96 left-[730px] top-[633px] absolute bg-white rounded-2xl shadow border border-gray-200" />
    <div className="w-96 h-96 left-[120px] top-[633px] absolute bg-white rounded-2xl shadow border border-gray-200" />
    <div className="w-80 left-[858px] top-[763px] absolute text-center text-neutral-400 text-lg font-normal font-['Open Sans'] leading-loose">Reliable and efficient, Event Door made the process seamless from start to finish.</div>
    <div className="w-80 left-[248px] top-[763px] absolute text-center text-neutral-400 text-lg font-normal font-['Open Sans'] leading-loose">The custom products really helped us stand out at our conference. Would highly recommend Event Door!</div>
    <div className="left-[977px] top-[956px] absolute text-zinc-700 text-2xl font-bold font-['Open Sans'] leading-loose">Anjali T.</div>
    <div className="left-[374px] top-[956px] absolute text-zinc-700 text-2xl font-bold font-['Open Sans'] leading-loose">Ravi D.</div>
    <div className="w-96 h-96 left-[730px] top-[118px] absolute">
      <div className="w-96 h-96 left-0 top-0 absolute bg-sky-100 rounded-2xl shadow border border-gray-200" />
      <div className="w-80 left-[128px] top-[130px] absolute text-center text-neutral-400 text-lg font-normal font-['Open Sans'] leading-loose">Event Door provided the perfect swag for our corporate event. The quality and service were exceptional!</div>
      <div className="left-[250px] top-[315px] absolute text-zinc-700 text-2xl font-bold font-['Open Sans'] leading-loose">Priya K.</div>
    </div>
    <div className="h-64 left-[198px] top-[169px] absolute">
      <div className="w-80 left-0 top-[150px] absolute text-neutral-400 text-lg font-semibold font-['Open Sans'] leading-loose">Create & sell custom products with your designs, we'll print and ship them to your customers</div>
      <div className="w-96 left-0 top-0 absolute text-zinc-700 text-5xl font-bold font-['Open Sans']">What Our Customers Say</div>
    </div>
    <img className="w-36 h-36 left-[955px] top-[48px] absolute rounded-full" src="https://via.placeholder.com/140x140" />
    <img className="w-36 h-36 left-[955px] top-[563px] absolute rounded-full" src="https://via.placeholder.com/140x140" />
    <img className="w-36 h-36 left-[345px] top-[563px] absolute rounded-full" src="https://via.placeholder.com/140x140" />
  </div>
  <div className="px-28 py-8 bg-white justify-center items-center inline-flex">
    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-10 inline-flex">
      <div className="self-stretch text-center text-zinc-700 text-5xl font-bold font-['Open Sans']">Latest Insights and Tips</div>
      <div className="self-stretch justify-start items-start gap-16 inline-flex">
        <div className="w-96 flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-96 h-96 relative">
            <div className="w-96 h-96 left-0 top-0 absolute bg-stone-300 rounded-2xl" />
            <div className="w-96 h-96 left-0 top-0 absolute bg-stone-300 rounded-lg" />
          </div>
          <div className="w-96 h-52 relative">
            <div className="w-96 left-0 top-[134px] absolute text-neutral-400 text-lg font-normal font-['Open Sans'] leading-10">Learn how to use branded merchandise to leave a lasting impression and promote your brand effectively.</div>
            <div className="w-96 left-0 top-[42px] absolute text-zinc-700 text-2xl font-bold font-['Open Sans'] leading-9">5 Branding Tips to Boost Your Business with Swag</div>
            <div className="w-24 left-0 top-0 absolute text-zinc-700 text-lg font-normal font-['Open Sans'] leading-loose">17-12-2024</div>
          </div>
        </div>
        <div className="w-96 flex-col justify-start items-start gap-11 inline-flex">
          <div className="h-80 relative">
            <div className="w-96 h-60 left-0 top-0 absolute bg-stone-300 rounded-lg" />
            <div className="w-96 left-0 top-[275px] absolute text-zinc-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Top 10 Swag Items for 2024 Events</div>
          </div>
          <div className="h-80 relative">
            <div className="w-96 h-60 left-0 top-0 absolute bg-stone-300 rounded-lg" />
            <div className="w-96 left-0 top-[275px] absolute text-zinc-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Top 10 Swag Items for 2024 Events</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h-96 relative bg-white">
    <div className="w-96 h-96 left-[120px] top-[47px] absolute bg-neutral-50 rounded-lg" />
    <div className="w-60 h-20 left-[323px] top-[98px] absolute">
      <div className="w-44 left-0 top-[32px] absolute text-neutral-400 text-sm font-normal font-['Open Sans'] leading-normal">Create on-brand apparel with ease.</div>
      <div className="w-60 left-0 top-0 absolute text-zinc-700 text-xl font-bold font-['Open Sans'] leading-loose">T-Shirt Customization</div>
    </div>
    <div className="w-16 h-16 left-[223px] top-[98px] absolute flex-col justify-center items-center inline-flex" />
    <div className="w-60 h-28 left-[323px] top-[245px] absolute">
      <div className="w-60 left-0 top-[63px] absolute text-neutral-400 text-sm font-normal font-['Open Sans'] leading-normal">High-quality drinkware with your logo</div>
      <div className="w-60 left-0 top-0 absolute text-zinc-700 text-xl font-bold font-['Open Sans'] leading-loose">Mug and Cup Customization</div>
    </div>
    <div className="w-16 h-16 left-[221px] top-[245px] absolute flex-col justify-center items-center inline-flex" />
    <div className="w-60 h-20 left-[323px] top-[392px] absolute">
      <div className="w-60 left-0 top-[32px] absolute text-neutral-400 text-sm font-normal font-['Open Sans'] leading-normal">Branded office supplies for professionals.</div>
      <div className="w-60 left-0 top-0 absolute text-zinc-700 text-xl font-bold font-['Open Sans'] leading-loose">Office Essentials</div>
    </div>
    <div className="w-14 h-16 left-[225px] top-[392px] absolute flex-col justify-center items-center inline-flex" />
    <div className="w-96 h-96 left-[646px] top-[88px] absolute bg-sky-700 rounded-lg" />
    <div className="w-80 left-[710px] top-[147px] absolute text-white text-3xl font-bold font-['Open Sans']">Get a Special Promo Today Only!</div>
    <div className="w-72 left-[710px] top-[256px] absolute text-white text-lg font-semibold font-['Open Sans'] leading-loose">Create custom swag with special discounts for a limited time.</div>
    <div className="w-40 h-14 left-[710px] top-[401px] absolute">
      <div className="w-40 h-14 left-0 top-0 absolute bg-white rounded-lg" />
      <div className="left-[40px] top-[21px] absolute text-sky-700 text-sm font-semibold font-['Open Sans'] tracking-wide">Get it now</div>
    </div>
  </div>
  <div className="self-stretch h-96 px-28 py-20 bg-neutral-700 flex-col justify-start items-start gap-2.5 flex">
    <div className="self-stretch justify-between items-start inline-flex">
      <div className="w-96 flex-col justify-start items-start gap-5 inline-flex">
        <img className="w-24 h-24" src="https://via.placeholder.com/92x92" />
        <div className="h-40 relative">
          <div className="w-96 h-20 left-0 top-[84px] absolute">
            <div className="left-[19px] top-[26px] absolute text-white text-lg font-semibold font-['Open Sans'] leading-loose">Enter your email address</div>
            <div className="w-96 h-20 left-0 top-0 absolute rounded-lg border border-white" />
            <div className="w-36 h-14 left-[328px] top-[15px] absolute">
              <div className="w-36 h-14 left-0 top-0 absolute bg-sky-700 rounded-lg" />
              <div className="left-[36px] top-[11px] absolute text-white text-lg font-semibold font-['Open Sans'] leading-loose">Join now</div>
            </div>
          </div>
          <div className="w-96 left-0 top-0 absolute text-white text-2xl font-bold font-['Open Sans']">Stay up to date with our latest offers and stories.</div>
        </div>
      </div>
      <div className="w-44 h-52 relative">
        <div className="left-0 top-[54px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-9 tracking-wide">Create account</div>
        <div className="left-0 top-[112px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-9 tracking-wide">Search product</div>
        <div className="left-0 top-[170px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-9 tracking-wide">Upload & print</div>
        <div className="left-0 top-0 absolute text-sky-700 text-2xl font-semibold font-['Open Sans'] leading-10 tracking-wide">Print a product</div>
      </div>
      <div className="w-48 h-52 relative">
        <div className="left-0 top-[54px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-9 tracking-wide">Customer services</div>
        <div className="left-0 top-[112px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-9 tracking-wide">Email us</div>
        <div className="left-0 top-[170px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-9 tracking-wide">Privacy policy</div>
        <div className="left-0 top-0 absolute text-sky-700 text-2xl font-semibold font-['Open Sans'] leading-10 tracking-wide">Support</div>
      </div>
    </div>
  </div>
            </div>
      </main>
    </HydrateClient>
  );
}
