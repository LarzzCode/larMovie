const Pagination = ({ page, setPage, lastPage }) => {

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  return (
    <div className="flex justify-center md:text-2xl items-center text-color-dark py-4 font-bold px-2 gap-4">
      {page <= 1 ? null :
        <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
      }
      <p>{page} of {lastPage} </p>
      <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
    </div>
  )
}

export default Pagination