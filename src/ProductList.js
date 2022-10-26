import React, {useEffect} from 'react'
import './product.css'


function ProductList() {

   
    const[fake,setProduct]=React.useState([]);
  

    const productcart=async()=>{
      const response=await fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
     const data=await response.json();//convert json to object
      
      setProduct(data)
  }
    useEffect(()=>{
      productcart();
     
    },[])

   
 
  return (
    <div className='heading'>
      <h1 className='h1'>Product</h1>
   
    <div className='product'>
       {
      Object.values(fake).map(item=>{
        return( <div className='box'>
          <img src={item.productImage}  alt="miss" />
          <div className='content'>
              <h1>{item.productName}</h1>
              </div>
              <div className='rating'>
              <p className='star'>⭐⭐⭐⭐⭐ </p>
              <p><font>{item.oldPrice}</font>/- <span>{item.newPrice}/-</span></p>
              

             

          </div>
          <div className='btn'>
              <button type='button'>Add To Cart</button>
          </div>
          </div>
          

          
        )

      })
    }
      
    </div>
    </div>
  )
}

export default ProductList
