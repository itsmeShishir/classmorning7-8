
function MainSection() {
  return (
    <>
    <section
      className="w-[90vw] md:w-[70vw] mx-auto flex items-center flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:h-[60vh] font-['Poppins']"
    >
      <div className="mt-3 md:mt-0">
        <h1 className="text-sm font-bold text-gray-500 py-1">We are gathered</h1>
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-900 md:pb-3 ">For <span className="font-light">Your</span> <br />  Digital Marketing| </h1>
        <p className="text-gray-500 text-sm md:w-[30vw] py-3 md:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit fugit ipsam.</p>
        <div className="flex gap-5 mt-3 mb-3 md:mb-0 md:mt-5">
            <a href="#" className="bg-blue-700 text-white px-4 py-2 md:px-9 md:py-4 rounded hover:border-2 hover:border-blue-900">Read More</a>
            <a href="#" className=" border-2 text-blue-700 px-4 py-2 md:px-9 md:py-4 border-blue-900 rounded hover:bg-blue-700 hover:text-white">Get Started</a>
        </div>
      </div>
      <div>
        <img
         className="md:w-[30vw] md:h-[30vh] object-cover rounded"
         src="https://wp.w3layouts.com/digitmarketing/wp-content/themes/digitmarketing/assets/images/banner3.jpg" 
         alt="" />
      </div>
    </section>
    </>
  )
}

export default MainSection