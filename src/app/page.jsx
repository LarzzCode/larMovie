import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header" ;
import { getAnimeResponse } from "./libs/api-libs";


const Page = async() => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
     <section>
        <Header title='Paling Popular' linkHref='/populer' linkTitle='See All'/>
        <AnimeList api={topAnime}/>
      </section>
    </>
    );
}

export default Page
