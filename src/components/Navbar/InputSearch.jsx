"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const InputSearch = () => {

  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    const keyword = searchRef.current.value

    if(!keyword) return;

    if(e.key === 'Enter' || e.type ==='click'){
      e.preventDefault()
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