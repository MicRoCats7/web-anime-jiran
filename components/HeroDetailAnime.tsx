import Image from "next/image";
import iconEpisodes from "../public/episodes.svg";
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const HeroDetailAnime = ({ anime }: { anime: any }) => {
    return (
        <>
            <div className="relative w-full mx-auto h-[100vh]">
                <Image
                    src={anime?.data?.trailer?.images?.maximum_image_url}
                    alt={anime?.data?.title}
                    fill
                    className="object-cover w-full h-full objet-center"
                />
            </div>
            <div className="z-[999px] absolute bottom-0 bg-gradient-to-t from-black from-40% w-full max-w-7xl">
                <div className="flex flex-row max-w-6xl mx-auto">
                    <Image
                        src={anime?.data?.images?.webp?.large_image_url}
                        alt={anime?.data?.title}
                        width={250}
                        height={250}
                        className="object-contain objet-center"
                    />
                    <div className="p-10 flex flex-col gap-4">
                        <h1 className="text-white font-bold text-5xl">{anime?.data?.title}</h1>
                        <div className="flex items-center gap-4">
                            <div className="py-[5px] px-2 bg-[#161921] rounded-lg flex items-center gap-2">
                                <IoTimeOutline size={20} />
                                <p className="text-white text-sm font-bold capitalize">
                                    {anime?.data?.duration}
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
                                    Ep {anime?.data?.episodes}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 items-center bg-[#161921] py-1 px-2 rounded-lg">
                                <FaStar size={20} className="text-yellow-500" />
                                <p className="text-base text-white font-bold">
                                    {anime?.data?.score}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {anime.data.genres.map((genres: any) => (
                                <div key={genres.mal_id} className='bg-white/10 py-1 px-2 rounded-lg'>
                                    <p className='font-semibold '>{genres.name}</p>
                                </div>
                            ))}
                        </div>
                        <p>{anime?.data?.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroDetailAnime