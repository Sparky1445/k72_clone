const RoundedImage = ({image}) => {
    return (
         <div className=" m-0 p-0 w-60 h-22 inline-block rounded-[999px] overflow-hidden bg-red-500">
                          <img  className='h-full w-full object-cover  rounded-lg' src={image} />
                          </div>
    )
}

export default RoundedImage