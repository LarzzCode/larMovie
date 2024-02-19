import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <div>
            <h1 className="text-3xl px-2 pt-4  text-color-dark font-bold">{anime.data.title} - {anime.data.year}</h1>
            <div className="flex text-color-dark gap-3 px-2 overflow-x-auto">
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Score
                    </div>
                    {anime.data.score}
                </div>
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Episodes
                    </div>
                    {anime.data.episodes}
                </div>
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Popularity
                    </div>
                    {anime.data.popularity}
                </div>
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Members
                    </div>
                    {anime.data.members}
                </div>
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Season
                    </div>
                    {anime.data.season}
                </div>
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Duration
                    </div>
                    {anime.data.duration}
                </div>
                <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                    <div className="font-bold">
                        Favorites
                    </div>
                    {anime.data.favorites}
                </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap gap-2 pt-4 px-2 overflow-hidden">
                <Image src={anime.data.images.webp.image_url} alt="..." width={350} height={350} className="w-full rounded object-cover pt-2 " />
                <div className="pt-4 text-wrap text-color-dark ">
                    <p>
                        {anime.data.synopsis}
                    </p>
                </div>
            </div>

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>

        </div>
    )
}

export default Page 
