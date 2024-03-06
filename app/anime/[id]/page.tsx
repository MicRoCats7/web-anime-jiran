import { fetchAnimeDetail } from "@/app/action";
import HeroDetailAnime from "@/components/HeroDetailAnime";
import VideoPlayer from "@/components/VideoPlayer";

const Page = async ({ params: { id } }: { params: { id: number } }) => {
    const anime = await fetchAnimeDetail(id)

    return (
        <>
            <section>
                <HeroDetailAnime anime={anime} />
            </section>
            <section>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </section>
        </>
    )
}

export default Page;