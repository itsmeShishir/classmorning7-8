import BlogCard from "../Component/BlogCard"
import MainSection from "../Component/MainSection"

function Home() {
  return (
    <>
    <MainSection />
      
    
    <section className="bg-gray-200 md:h-[60vh] py-20 py:my-0 my-10 md:my-0">
        <div className="w-[90vw] md:w-[70vw] mx-auto flex flex-col md:flex-row items-center justify-between md:h-[25vh]">
            <div className=" md:w-[50vw]">
                <h1 className="text-lg font-bold text-gray-500 py-1">Design & Marketing</h1>
                <p className="text-5xl font-semibold text-blue-900 pb-2">{`Let's grow your business together.`}</p>
            </div>
            <div className="md:w-[40vw]">
                <p className="text-gray-500 text-lg py-1">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="w-[90vw] md:w-[70vw] mx-auto flex flex-col md:flex-row items-center justify-between md:h-[25vh]">
            <div className="">
                <i className="fa-solid fa-user-shield text-[42px] hover:text-red-400 py-1"></i>
                <h1 className="text-[24px] font-semibold text-blue-900 py-3">Great Support.</h1>
                <p className="text-[20px] text-gray-500 py-1">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum viverra feugiat.</p>
            </div>
            <div className="">
                <i className="fa-regular fa-pen-to-square text-[42px] text-red-400 py-1"></i>
                <h1 className="text-[24px] font-semibold text-blue-900 py-3">Great Support.</h1>
                <p className="text-[20px] text-gray-500 py-1">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum viverra feugiat.</p>
            </div>
            <div className="">
                <i className="fa-solid fa-signal text-[42px] hover:text-red-400 py-1"></i>
                <h1 className="text-[24px] font-semibold text-blue-90 py-3">Great Support.</h1>
                <p className="text-[20px] text-gray-500 py-1">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum viverra feugiat.</p>
            </div>
        </div>
    </section>
    <section className="relative bg-gray-200 h-[100vh] md:h-[70vh] bg-red-100 bg-[url('https://wp.w3layouts.com/digitmarketing/wp-content/themes/digitmarketing/assets/images/banner5.jpg')]"> 
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 bg-fixed  ">
        <div className="md:w-[70vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 h-[60vh]">
        <div className="md:w-[40vw] "></div>
        <div className="w-[90vw] md:w-[50vw] text-white">
          <h1 className="text-lg font-bold  py-1 ">Open the future</h1>
          <h1 className="text-5xl font-semibold  pb-2">Innovative Design &  <br />Branding</h1>
          <p className=" text-lg py-1">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      </div>
    </section>

    <section>
      <div className="w-[90vw] md:w-[70vw] mx-auto flex flex-col md:flex-row items-center justify-between md:h-[50vh] gap-10 my-5 md:my-0">
        <div className="md:w-[25vw]">
          <img src="https://wp.w3layouts.com/digitmarketing/wp-content/themes/digitmarketing/assets/images/g1.jpg" alt="" className="rounded-md brightness-75" />
          <h1 className="text-2xl font-extrabold py-3 hover:text-blue-900">Research.</h1>
          <p className="text-gray-500">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum viverra feugiat.</p>
        </div>
        <div className="md:w-[25vw]">
          <img src="https://wp.w3layouts.com/digitmarketing/wp-content/themes/digitmarketing/assets/images/g2.jpg" alt="" className="rounded-md brightness-75" />
          <h1 className="text-2xl font-extrabold py-3 hover:text-blue-900">Research.</h1>
          <p className="text-gray-500">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum viverra feugiat.</p>
        </div>
        <div className="md:w-[25vw]">
          <img src="https://wp.w3layouts.com/digitmarketing/wp-content/themes/digitmarketing/assets/images/g3.jpg" alt="" className="rounded-md brightness-75" />
          <h1 className="text-2xl font-extrabold py-3 hover:text-blue-900">Research.</h1>
          <p className="text-gray-500">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum viverra feugiat.</p>
        </div>
      </div>
    </section>  
    <section>
      <div className="w-[90vw] md:w-[70vw] mx-auto md:h-[70vh] ">
       <div className="flex flex-col items-center gap-3 pb-10">
        <h1 className=" text-xl font-normal text-gray-500  ">Blog Posts</h1>
        <h1 className=" text-5xl font-extrabold ">Recent Blog Post</h1>
       </div>
        <div className="flex items-center flex-col md:flex-row justify-between gap-10 md:h-[40vh]">
          <BlogCard links="https://wp.w3layouts.com/digitmarketing/wp-content/uploads/sites/76/2022/03/banner6.jpg" title="Research."></BlogCard>
          <BlogCard links="https://wp.w3layouts.com/digitmarketing/wp-content/uploads/sites/76/2022/03/banner5.jpg" title="Stay connected with us and get your digital marketing strategy in place." ></BlogCard>
          <BlogCard links="https://wp.w3layouts.com/digitmarketing/wp-content/uploads/sites/76/2022/03/banner4.jpg" title="Lift your business to new heights with our digital marketing services."></BlogCard>
        </div>
        
      </div>
    </section>
    <section className="relative bg-gray-200 h-[60vh] md:h-[60vh] bg-red-100 bg-[url('https://wp.w3layouts.com/digitmarketing/wp-content/themes/digitmarketing/assets/images/banner4.jpg')] bg-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 bg-fixed  ">
        <div className="md:w-[70vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:h-[60vh]">
        <div className=" md:w-[50vw] text-white mx-auto text-center">
          <i className="fas fa-quote-left text-7xl py-2"></i>
          <p className=" text-2xl font-semibold py-2"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
            laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
            Dolores molestias adipisci dolor sit amet!.
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex justify-center gap-3 py-2">
            <p className="font-bold">Mike Thyson</p>
            <p className="font-bold">Example City</p>
          </div>
        </div>

      </div>
      

      </div>
    </section>  
    <section  className="w-[90vw] md:w-[70vw] mx-auto flex flex-col md:flex-row items-center justify-between md:h-[30vh] gap-10">
      <div className="text-start font-['Poppins']">
        <h1 className="text-md text-gray-700 my-1">
          Stay Update!
        </h1>
        <h1 className="text-5xl font-extrabold leading-11	md:w-[35vw] my-2 ">Subscribe to our newsletter
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <input  className="border-2 border-gray-300 py-2 px-10 md:w-[20vw] rounded text-lg bg-gray-200" type="text" placeholder="Enter your email address" />
        <button className="bg-blue-700 text-white px-9 py-3 rounded hover:border-2 hover:border-blue-900">Subscribe</button>
      </div>
    </section>
        
    </>

  )
}

export default Home