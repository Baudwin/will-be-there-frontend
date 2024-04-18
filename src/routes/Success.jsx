
export const Success = () => {
  return (
    <div className="py-12">

        <div className="container space-y-5">
    <h1 className="text-3xl text-center font-semibold">Congratulations!</h1>
    <div className="flex justify-center">
      <img className="" src="/images/cheers.jpeg" alt="" />  
    </div>
    <p className="capitalize text-xl text-center">your event has been successfully created.</p>
    <div className="flex flex-col justify-center items-center gap-4">
        <button className=" bg-green-900 hover:bg-white hover:text-black hover:border hover:border-green-900  rounded-full px-5 py-2 text-white uppercase font-semibold">manage your event</button>
        <button className=" hover:bg-green-900 hover:text-white rounded-full px-5 py-2 text-green-900 border border-green-800 uppercase text-sm font-semibold">create another event</button>
    </div>
        </div>
        

    </div>
  )
}
