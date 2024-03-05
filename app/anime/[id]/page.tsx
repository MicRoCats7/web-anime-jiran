import { fetchAnimeDetail } from "@/app/action";
import Image from "next/image";
import iconEpisodes from "../../../public/episodes.svg";

const Page = async ({ params: { id } }: { params: { id: number } }) => {
    const anime = await fetchAnimeDetail(id)

    return (
        <>
            <div className="relative w-full mx-auto h-[100vh]">
                <Image
                    src={anime.data.images.jpg.large_image_url}
                    alt={anime.data.title}
                    fill
                    className="object-contain w-full h-full objet-center"
                />
            </div>
            <div className="z-[999px] absolute bottom-0 bg-gradient-to-t from-black from-40% w-full max-w-7xl">
                <div className="flex flex-row">
                    <div className="p-10 flex flex-col gap-4">
                        <h1 className="text-white font-bold text-5xl">{anime.data.title}</h1>
                        <div className="flex items-center gap-4">
                            <div className="py-1 px-2 rounded-lg bg-[#161921] rounded-sm">
                                <p className="text-white text-sm font-bold capitalize">
                                    {anime.data.type}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 items-center bg-[#161921] py-1 px-2 rounded-lg">
                                <Image
                                    src={iconEpisodes}
                                    alt="episodes"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-base text-white font-bold">
                                    {anime.data.episodes || anime.data.episodes_aired}
                                </p>
                            </div>
                        </div>
                        <p>{anime.data.synopsis}</p>
                    </div>
                    <Image
                        src={anime.data.images.webp.large_image_url}
                        alt={anime.data.title}
                        width={200}
                        height={200}
                        className="object-contain objet-center"
                    />
                </div>
            </div>
        </>
    )
}

export default Page;