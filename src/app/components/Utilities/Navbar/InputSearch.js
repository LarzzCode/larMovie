"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const InputSearch = () => {

  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {

    if(e.key === 'Enter' || e.type ==='click'){
      e.preventDefault()
      const keyword = searchRef.current.value
      router.push(`/search/${keyword}`)
      searchRef.current.value=''
    }
  }
 

  return (
    <div className="relative">
      <input
        placeholder='Search here...'
        className=' p-2 rounded w-full'
        ref={searchRef} onKeyDown={handleSearch}/>  
        <button className=" absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24}/> 
        </button>
    </div>
  )
}

export default InputSearch