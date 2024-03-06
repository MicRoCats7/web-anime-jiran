import Hero from "@/components/Hero";
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";
import Search from "@/components/Search";

async function Page() {
  const data = await fetchAnime(1)

  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
          {/* <Search placeholder="Search....." /> */}
        </div>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
    </>
  );
}

export default Page;
