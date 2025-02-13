import React from 'react'

function LastTwo() {
  return (
    <>  
       <div className="main h-screen w-full ">

       <div className="headings flex justify-center">
          <div className="top-headings mt-10 text-center ">
            <h1 className="font-outfit text-3xl text-blue-300
              custom-sm:text-[14px]
               custom-m:text-[16px] 
              sm:text-2xl
               md:text-2xl
               lg:text-3xl
               xl:text-3xl
               2xl:text-3xl
            
            ">
              Our range of skincare are rich in vitamins &
            </h1>
            <h1 className="font-outfit  text-blue-300
            custom-sm:text-[14px]
               custom-m:text-[16px] 
              sm:text-2xl
               md:text-2xl
               lg:text-3xl
               xl:text-3xl
               2xl:text-3xl
            
            ">
              antioxidants which provide a powerhouse of goodness
            </h1>
          </div>
        </div>
        <div className="boxes grid grid-cols-1
         justify-items-center  gap-4 	 sm:flex sm:justify-evenly mt-10 ">
            <div className="box-1 bg-red-400 h-[220px] w-[250px] 
               sm:h-[220px]   sm:w-[200px]
               md:h-[290px]  md:w-[240px]
               lg:h-80   lg:w-80 
               xl:h-80   xl:w-80 
               2xl:h-80  2xl:w-80 
            ">
               <img className='h-[220px] w-[250px]
                sm:h-[220px]   sm:w-[200px]
               md:h-[290px]  md:w-[240px]
               lg:h-[320px]  lg:w-[320px] 
               xl:h-[320px]  xl:w-[320px] 
               2xl:h-[320px] 2xl:w-[320px]
               
              object-cover ' src='./images/image-4.jpg'/> 
          </div>
            <div className="box-2  bg-red-400 h-[220px] w-[250px] 
               sm:h-[220px]   sm:w-[200px]
               md:h-[290px]  md:w-[240px]
               lg:h-80   lg:w-80 
               xl:h-80   xl:w-80 
               2xl:h-80  2xl:w-80 
            ">
            <img className='h-[220px] w-[250px]
               sm:h-[220px]   sm:w-[200px]
               md:h-[290px]  md:w-[240px]
               lg:h-[320px]  lg:w-[320px] 
               xl:h-[320px]  xl:w-[320px] 
               2xl:h-[320px] 2xl:w-[320px]
            
             object-cover' src='./images/image-5.jpg'/> 
            </div>
            <div className="box-3  bg-red-400 h-[220px] w-[250px] 
               sm:h-[220px]   sm:w-[200px]
               md:h-[290px]  md:w-[240px]
               lg:h-80   lg:w-80 
               xl:h-80   xl:w-80 
               2xl:h-80  2xl:w-80 
            ">
            <img className='h-[220px] w-[250px]
            
              sm:h-[220px]   sm:w-[200px]
               md:h-[290px]  md:w-[240px]
               lg:h-[320px]  lg:w-[320px] 
               xl:h-[320px]  xl:w-[320px] 
               2xl:h-[320px] 2xl:w-[320px]
              object-cover' src='./images/image-6.jpg'/> 
            </div>
        </div>
        <div className="bottom-btn text-center mt-8 ">
                     <button className="bg-[rgb(207,230,230)] text-white p-2 mt-4 font-semibold w-[225px]" >SEE HYDRATING RANGE</button>
                  </div>
        </div>
    </>
  )
}

export default LastTwo