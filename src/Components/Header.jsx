import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="background bg-[url('/images/image1.webp')] h-screen w-full no-repeat bg-cover bg-center">
          <div className="top-section flex justify-center p-6  items-center
            sm:flex    sm:justify-between 
            md:flex    md:justify-between 
            lg:flex    lg:justify-between 
            xl:flex    xl:justify-between 
            2xl:flex   2xl:justify-between 
          
          ">
              <div className="logo">
                <h1 className="invisible	 text-white font-medium 
                  sm:text-md    sm:visible	
                  md:text-md    md:visible	
                  lg:text-md    lg:visible	
                  xl:text-md    xl:visible	 
                  2xl:text-md   2xl:visible	

        
                ">LOGO</h1>
              </div>
              <div className="company-name ">
              <h1 className="font-satisfy ml-16 text-5xl  text-white font-medium
                  sm:text-5xl    sm:
                  md:text-5xl    md:
                  lg:text-5xl    lg: 
                  xl:text-5xl    xl:  
                  2xl:text-5xl   2xL 
              
              ">alkira</h1>
              </div>
              <div className="other-part flex gap-5">
              <h1 className=" invisible text-white font-medium 
                  sm:text-md   sm:visible
                  md:text-md   md:visible
                  lg:text-md   lg:visible
                  xl:text-md   xl:visible
                  2xl:text-md  2xl:visible
              
              ">CATALOG</h1>
              <h1 className="invisible text-white font-medium	
              
                  sm:text-md   sm:visible
                  md:text-md   md:visible
                  lg:text-md   lg:visible
                  xl:text-md   xl:visible
                  2xl:text-md  2xl:visible
              
              ">CART</h1> 
              </div>
          </div>
              <div className="nav-bar">
                   <div className="nav-element flex justify-center gap-5
                      sm:gap-12
                      md:gap-12
                      lg:gap-12
                      xl:gap-12
                      2xl:gap-12
                   
                   ">
                    <h1 className="text-xs text-white font-medium
                      sm:text-lg
                      md:text-lg
                      lg:text-lg
                      xl:text-lg
                      2xl:text-lg
                    
                    " >SHOP</h1>
                    <h1 className="text-xs text-white font-medium
                      sm:text-lg
                      md:text-lg
                      lg:text-lg
                      xl:text-lg
                      2xl:text-lg
                    
                    ">DISCOVER</h1>
                    <h1 className="text-xs text-white font-medium
                      sm:text-lg
                      md:text-lg
                      lg:text-lg
                      xl:text-lg
                      2xl:text-lg
                    
                    
                    ">INGREDIENTS</h1>
                    <h1 className="text-xs text-white font-medium
                      sm:text-lg
                      md:text-lg
                      lg:text-lg
                      xl:text-lg
                      2xl:text-lg
                    
                    
                    ">WHERE TO BUY</h1>
                   </div>
              </div> 

               <div className="bottom-section text-end p-8 ">
                  <div className="bottom-element ">
                    <h1 className="text-white text-sm mt-20
                        sm:text-md
                        md:text-md
                        lg:text-md
                        xl:text-md
                        2xl:text-md
                    
                    ">THE HYDRATING RANGE</h1>
                    <h1 className="text-white text-2xl mt-7 font-eb-garamond
                    
                        sm:text-4xl
                        md:text-4xl 
                        lg:text-4xl 
                        xl:text-4xl 
                        2xl:text-4xl  
                    
                    
                    ">Celebrating</h1>
                    <h1 className="text-white text-2xl font-eb-garamond 
                    
                     sm:text-4xl
                        md:text-4xl 
                        lg:text-4xl 
                        xl:text-4xl 
                        2xl:text-4xl  
                    
                    
                    ">Australina Natives</h1>
                  </div>
                  <div className="bottom-btn ">
                      <button className="bg-white text-md p-2 mt-4 font-semibold 
                      w-[200px]    
                       sm:w-[225px]
                       md:w-[225px]
                       lg:w-[225px]
                       xl:w-[225px]
                       2xl:w-[225px]
                      
                      " >SEE HYDRATING RANGE</button>
                   </div>
               </div>
        </div>
      </div>
    </>
  );
}

export default Header;