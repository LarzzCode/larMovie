const Pagination = ({page, setPage}) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState+1)
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState-1)
    scrollTop()
  }

    return (
      <div className="flex justify-center md:text-2xl items-center text-color-primary py-4 px-2 gap-4"> 
        <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
        <p>{page}</p>
        <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
      </div>
    )
  }
  
  export default Pagination