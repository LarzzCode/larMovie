import AnimeList from "@/app/components/AnimeList";
import { Header } from "@/app/components/AnimeList/Header";

const Page = async({params}) => {
  const {keyword} = params  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <>
     <section>
        <Header title={`Pencarian untuk ${keyword}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
    );
}
export default Page
