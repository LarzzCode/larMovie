"use client"
import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"



const VideoPlayer = ({youtubeId}) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleButton = () => {
    setIsOpen((prevState) => !prevState)
  }
  
  const option = {
    width : "300",
    height: "250"
  }
   
  const Player = () => {
    return (
      <div className="fixed bottom-3 right-3">
        <button onClick={handleButton} className="text-color-primary mb-1 ">
            <XCircle size={32} />
        </button>
        <YouTube
          title={`Lar Movie Mania`}
          loading={`Wait Cuy`} 
          videoId={youtubeId} 
          onReady={( event ) => event.target.pauseVideo()}
          opts={option}
          />
      </div>
    )
  }

  return isOpen 
    ?
    <Player /> 
    : 
    <button
      onClick={handleButton}  
      className='fixed bottom-5 right-5 px-3 py-1 bg-color-primary text-color-dark mb-1'>
        Open Trailer
    </button>
}

export default VideoPlayer