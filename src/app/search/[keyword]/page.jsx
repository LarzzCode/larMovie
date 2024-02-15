import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";

const Page = async({params}) => {
  const {keyword} = params  

  const decodeKey = decodeURI(keyword)

      const searchAnime = await getAnimeResponse("anime", `q=${decodeKey}`)

  return (
    <>
     <section>
        <Header title={`Pencarian untuk ${decodeKey}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
    );
}
export default Page
