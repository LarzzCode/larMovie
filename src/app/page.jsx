import AnimeList from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import { getAnimeResponse, getRecommenAnime, reproduce } from "@/libs/api-libs";


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getRecommenAnime("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
    <>
      <section>
        <Header title='Paling Populer' linkHref='/populer' linkTitle='Lihat Semua' />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title='Rekomendasi' />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}

export default Page
