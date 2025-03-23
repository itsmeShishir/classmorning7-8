import React, {useEffect, useState} from 'react'
import { getAllCategories } from '../../services/FrontendServices/CategoryServices';
function AllCategoryPage() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories()
      setCategories(data)
      console.log(data);
    }
    fetchCategories()
  }, [])

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-center'>All Categories</h1>
      {
        categories.map((category) => (
          <div key={category.id} className='flex flex-col items-center justify-center gap-4'>
            <img src={category.image} alt={category.name} className='w-10 h-10 rounded-full' />
            <h2 className='text-2xl font-bold'>{category.name}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default AllCategoryPage
