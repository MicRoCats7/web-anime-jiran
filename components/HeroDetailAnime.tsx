import Image from "next/image";
import iconEpisodes from "../public/episodes.svg";
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const HeroDetailAnime = ({ anime }: { anime: any }) => {
    return (
        <>
            <div className="relative w-full mx-auto md:h-[70vh] h-[100vh]">
                <Image
                    src={anime?.data?.trailer?.images?.maximum_image_url}
                    alt={anime?.data?.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
            </div>
            <div className="z-[999px] absolute md:bottom-0 md:top-auto top-0 mt-10 bg-gradient-to-t from-black from-[40%] w-full max-w-7xl">
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto ">
                    <Image
                        src={anime?.data?.images?.webp?.large_image_url}
                        alt={anime?.data?.title}
                        width={250}
                        height={250}
                        className="object-contain ml-10 "
                    />
                    <div className="md:px-10 px-10 md:py-10 py-7 flex flex-col gap-4">
                        <h1 className="text-white font-bold md:text-5xl text-3xl">{anime?.data?.title}</h1>
                        <div className="flex items-center gap-4">
                            <div className="py-[5px] px-2 bg-[#161921] rounded-lg flex items-center gap-2">
                                <IoTimeOutline size={20} />
                                <p className="text-white md:text-sm text-[11px] font-bold capitalize">
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
                                <p className="md:text-sm text-[11px] text-white font-bold">
                                    Ep {anime?.data?.episodes}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 items-center bg-[#161921] py-1 px-2 rounded-lg">
                                <FaStar size={20} className="text-yellow-500" />
                                <p className="md:text-sm text-[11px] text-white font-bold">
                                    {anime?.data?.score}
                                </p>
                            </div>
                        </div>
                        <div className="md:flex items-center grid grid-cols-3 gap-2">
                            {anime.data.genres.map((genres: any) => (
                                <div key={genres.mal_id} className="bg-white/10 py-1 px-2 rounded-lg">
                                    <p className="font-semibold md:text-base text-sm">{genres.name}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-white md:text-base text-sm">{anime?.data?.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroDetailAnime;
