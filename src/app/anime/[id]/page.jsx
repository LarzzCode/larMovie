import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async({ params : { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)
    return (
    <div>
        <h1 className="text-3xl px-2 py-4 overflow-x-auto text-color-primary font-bold">{anime.data.title}</h1>
        <div className="flex text-color-primary gap-3 px-2">
            <div className="border-2 rounded p-4">Score : {anime.data.score}</div>
            <div className="border-2 rounded p-4">Rank : {anime.data.rank}</div>
            <div className="border-2 rounded p-4">Episodes : {anime.data.episodes}</div>
            <div className="border-2 rounded p-4">Popularity : {anime.data.popularity}</div>
            <div className="border-2 rounded p-4">Members : {anime.data.memebrs}</div>
        </div>
        <Image src={anime.data.images.webp.image_url} alt="..." width={500} height={500} className="overflow-hidden object-cover p-2" />
        <div className="p-2 text-color-primary ">
            <p>
                {anime.data.synopsis}
            </p>
        </div>
        
    </div>
  )
}

export default Page 