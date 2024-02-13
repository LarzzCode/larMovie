const HeaderMenu = ({title}) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-color-primary text-2xl">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default HeaderMenu