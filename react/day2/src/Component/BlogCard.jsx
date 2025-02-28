
// function BlogCard({links, title, date="2022-03-25", author = "W3Layouts"}) {
//   return (
//     <>
//           <div className="md:w-[25vw] md:h-[40vh]">
//             <img src={links} alt="" className="rounded-md brightness-75" />
//             <div className="flex items-center justify-between py-3">
//               <div className="flex items-center gap-2">
//                 <i className="fa-solid fa-user text-red-900"></i>
//                 <h1>By <span className="text-md text-blue-900 font-bold">{author}</span></h1>
//               </div>
//               <div className="flex items-center gap-2">
//                 <i className="fa-regular fa-calendar-days"></i>
//                 <h1>{date}</h1>
//               </div>
//             </div>
//             <h1 className="text-2xl font-extrabold py-1 hover:text-blue-900">{title}</h1>
//           </div>
//     </>
//   )
// }

// export default BlogCard

// props -> properties 
import propTypes from 'prop-types'

function BlogCard(props) {
  return (
    <>
          <div className="md:w-[25vw] md:h-[40vh]">
            <img src={props.links} alt="" className="rounded-md brightness-75" />
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user text-red-900"></i>
                <h1>By <span className="text-md text-blue-900 font-bold">Shsihri</span></h1>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-calendar-days"></i>
                <h1>2025-10-20</h1>
              </div>
            </div>
            <h1 className="text-2xl font-extrabold py-1 hover:text-blue-900">{props.title}</h1>
          </div>
    </>
  )
}
BlogCard.defaultProps={
    links: "https://plus.unsplash.com/premium_photo-1738604141757-e0447f101dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    title: "",
    date: "2022-03-25",
    author: "hari"
}

BlogCard.propTypes={
    links: propTypes.string.isRequired,
    title: propTypes.string,
    date: propTypes.string,
    author: propTypes.string
}

export default BlogCard