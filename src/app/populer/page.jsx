"use client"

import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '../../libs/api-libs'

const Page = async () => {

  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)

    setTopAnime(popularAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])



  return (
    <>
      <HeaderMenu title={`Anime Populer #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
    </>
  )
}

export default Page