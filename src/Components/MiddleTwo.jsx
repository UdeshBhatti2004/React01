


import React from 'react'

function MiddleTwo() {
  return (
    <div className="h-screen w-full
       sm:h-[700px]
       md:h-[700px]
       lg:h-screen
       xl:h-screen
       2xl:h-screen
    ">
      {/* Heading Section */}
      <div className="flex justify-center mt-10">
        <h1 className="font-outfit  text-blue-300 text-center
            custom-sm:text-[16px]
               custom-m:text-[19px] 
              sm:text-2xl
               md:text-2xl
               lg:text-3xl
               xl:text-3xl
               2xl:text-3xl
        ">
          Natural skincare with scientifically proven remedies
        </h1>
      </div>

      {/* Icons and Paragraphs Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 
      
      md:grid-cols-2 
      lg:grid-cols-4 
      xl:grid-cols-4 
      2xl:grid-cols-4 
      
      gap-10 mt-6 justify-items-center
      sm:mt-32
      md:mt-32
      lg:mt-32
      xl:mt-32
      2xl:mt-32
      
      ">
        {/* Icon 1 with Paragraph */}
        <div className="text-center">
          <img
            className="h-12 w-12 mt-2 mx-auto object-contain
              
            sm:h-20    sm:w-20
            md:h-20    md:w-20
            lg:h-20    lg:w-20
            xl:h-20    xl:w-20
            2xl:h-20   2xl:w-20
            
            "
            src="./images/two-leaf.png"
            alt="Naturally Made"
          />
          <h1 className="font-bold text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md
          
          ">NATURALLY</h1>
          <h1 className="font-bold text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md
          
          
          ">MADE</h1>
          <div className="mt-3 text-[10px]
            sm:text-xs
            md:text-xs
            lg:text-xs
            xl:text-xs
            2xl:text-xs
          
          ">
            <p>Naturally made products are crafted</p>
            <p>These products avoid synthetic</p>
            <p>Additionally, many natural products are eco-friendly</p>
            <p>With the growing awareness</p>
            <p>benefits of natural</p>
          </div>
        </div>

        {/* Icon 2 with Paragraph */}
        <div className="text-center">
          <img
            className="h-12 w-12 object-contain mx-auto
            sm:h-20    sm:w-20
            md:h-20    md:w-20
            lg:h-20    lg:w-20
            xl:h-20    xl:w-20
            2xl:h-20   2xl:w-20
            
            "
            src="./images/solar.png"
            alt="Natural Ingredients"
          />
          <h1 className="font-bold  mt-2
          
            text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md
          
          ">NATURAL</h1>
          <h1 className="font-bold text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md">INGREDIENTS</h1>
          <div className="mt-3  text-[10px]
            sm:text-xs
            md:text-xs
            lg:text-xs
            xl:text-xs
            2xl:text-xs ">
            <p>Naturally made products are crafted</p>
            <p>These products avoid synthetic</p>
            <p>Additionally, many natural products are eco-friendly</p>
            <p>With the growing awareness</p>
            <p>benefits of natural</p>
          </div>
        </div>

        {/* Icon 3 with Paragraph */}
        <div className="text-center">
          <img
            className="h-12 w-12 object-contain mx-auto
            sm:h-20    sm:w-20
            md:h-20    md:w-20
            lg:h-20    lg:w-20
            xl:h-20    xl:w-20
            2xl:h-20   2xl:w-20
            
            "
            src="./images/test-tube.png"
            alt="Vegan Products"
          />
          <h1 className="font-bold mt-2 text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md">VEGAN</h1>
          <h1 className="font-bold text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md">PRODUCTS</h1>
          <div className="mt-3  text-[10px]
            sm:text-xs
            md:text-xs
            lg:text-xs
            xl:text-xs
            2xl:text-xs">
            <p>Naturally made products are crafted</p>
            <p>These products avoid synthetic</p>
            <p>Additionally, many natural products are eco-friendly</p>
            <p>With the growing awareness</p>
            <p>benefits of natural</p>
          </div>
        </div>

        {/* Icon 4 with Paragraph */}
        <div className="text-center">
          <img
            className="h-12 w-12 object-contain mx-auto
            sm:h-20    sm:w-20
            md:h-20    md:w-20
            lg:h-20    lg:w-20
            xl:h-20    xl:w-20
            2xl:h-20   2xl:w-20
            
            "
            src="./images/solar-2.png"
            alt="Ensure Purity"
          />
          <h1 className="font-bold mt-2 text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md">ENSURE</h1>
          <h1 className="font-bold text-xs
            sm:text-md
            md:text-md
            lg:text-md
            xl:text-md
            2xl:text-md">PURITY</h1>
          <div className="mt-3 text-[10px]
            sm:text-xs
            md:text-xs
            lg:text-xs
            xl:text-xs
            2xl:text-xs">
            <p>Naturally made products are crafted</p>
            <p>These products avoid synthetic</p>
            <p>Additionally, many natural products are eco-friendly</p>
            <p>With the growing awareness</p>
            <p>benefits of natural</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleTwo