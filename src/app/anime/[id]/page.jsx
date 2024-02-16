import { getAnimeResponse } from "@/app/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async({ params : { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)
    return (
    <div>
        <h1 className="text-3xl px-2 pt-4 overflow-x-auto text-color-primary font-bold">{anime.data.title} - {anime.data.year}</h1>
        <div className="flex text-color-primary gap-3 px-2">
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Score 
                </div>
                {anime.data.score}
            </div>
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Episodes 
                </div>
                {anime.data.episodes}
            </div>
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Popularity 
                </div>
                {anime.data.popularity}
            </div>
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Members 
                </div>
                {anime.data.members}
            </div>
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Season 
                </div>
                {anime.data.season}
            </div>
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Duration 
                </div>
                {anime.data.duration}
            </div>
            <div className="border-2 rounded flex flex-col items-center justify-center p-4">
                <div>
                   Favorites 
                </div>
                {anime.data.favorites}
            </div>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap gap-2 pt-4 px-2 overflow-hidden">
            <Image src={anime.data.images.webp.image_url} alt="..." width={350} height={350} className="w-full rounded object-cover pt-2 " />
            <div className="pt-4 text-wrap text-color-primary ">
                <p>
                    {anime.data.synopsis}
                </p>
            </div>
        </div>

        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        
    </div>
  )
}

export default Page 