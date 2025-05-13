import React ,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
  const {productId} = useParams();
  // console.log(productId);
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState("");
  const [size,setSize] = useState("");
 
  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item);
        // console.log(item)
        setImage(item.image[0])
        
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  },[productId])

  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            productData.image.map((item,index) => (
              <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img src={image} className='w-full h-auto' alt="" />
        </div>
        
      </div>
      
      
      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
       <div className='flex flex-col gap-4 my-8'>
        <p className=''>Select Size</p>
        <div className='flex gap-2'>
            {productData.sizes.map((item,index) => (
                <button onClick={() => setSize(item)} className={`border py-3 px-3 rounded-md bg-gray-200 ${item === size ? 'border-orange-500' : ""}`} key={index} > {item}</button>
            ))}
        </div>
       </div>
       <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Aaa To Cart</button>
       <hr className='mt-8 sm:w-4/5'/>
       <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
        <p>100% Pure Cotton Product</p>
        <p>COD Available</p>
        <p>Easy return and Exchange policy within 7 days</p>
       </div>
      </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border py-3 px-5 text-sm'>Description</b>
          <p className='border py-3 px-5 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam quisquam facere sunt quibusdam excepturi tenetur ducimus aspernatur quod quam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sed rem ipsum cupiditate, odio magnam?</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className= "opacity-0"></div>
}

export default Product
