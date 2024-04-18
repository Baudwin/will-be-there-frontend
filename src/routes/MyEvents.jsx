export const MyEvents = () => {
    return (
      <div className='py-10'>
          <div className='container sm:px-6 md:px-6'>
          <h1 className='text-center font-semibold text-2xl uppercase'>My Events</h1>
  
   <div className="py-5 grid grid-cols-2 sm:grid-cols-1 gap-6">
      {
          [1,2,4].map(e=>{
              return (
                  <div className="border-2 rounded-lg p-3 border-green-900 space-y-2" key={e}>
                      {/* event name  */}
                      <div className="flex justify-between items-center">
                      <h1 className="font-bold">Sally's Graduation Party</h1>
                      <span className="text-green-800 text-lg font-bold">...</span>
                      </div>
                      
  
                      <div className="flex items-center gap-3">
                          {/* image  */}
                          <img className="w-24 h-20 object-cover"  src="/images/event.jpg" alt="event-img" />
                          {/* time and description  */}
                          <div>
                              <div className="text-sm font-semibold text-green-700 space-x-4"> 
                                 <span>02 Aug 2024</span>
                              <span>2PM ECT</span> 
                              </div>
                              <div>
                                  <p className="text-sm">Lorem, ipsum dolor sit amem harum eveniet, soluta quos animi temporibus deserunt quae.</p>
                              </div>
                          </div>
                      </div>
                      {/* location and status  */}
                      <div className="flex justify-between items-center">
                      <span className="text-gray-700">2 Bronx Rd, NY</span>
                      <span className="text-green-600 font-semibold"> <span className="text-green-900">150</span> Guests</span>
                      </div>
                  </div>
              )
          })
      }
  
   </div>
  
          </div>
         
          </div>
    )
  }
  