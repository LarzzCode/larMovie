"use client"

import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import React, { useEffect, useState } from 'react'

const Page = async () => {

  const [page, setPage] = useState(1)
  const [anime, setAnime] = useState([])

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data = await response.json()

    setAnime(data)
  }

  useEffect( () => {
    fetchData()
  },[page])



  return (
    <>
      <HeaderMenu title={`Anime Populer ${page}`}/>
      <AnimeList api={anime}/>
      <Pagination page={page} setPage={setPage}/>
    </>
  )
}

export default Page