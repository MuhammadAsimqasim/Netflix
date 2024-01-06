// import React, { useEffect, useState } from 'react';
// import './PlansScreen.css';

// function PlansScreen() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         db.collection("products").where("active","==",true)
//         .get().then(querySnapshot => {
//             const products = {};
//             querySnapshot.forEach(async productDot =>{
//             products[productDot.id] = productDot.data()
//             const priceSnap = await productDot.ref.collection("prices").get();
//             priceSnap.docs.forEach(price => {
//                 products[productDoc.id].prices = {
//                     priceId: price.id,
//                     priceData: price.data()
//                 };
//             });
//             });
//             setProducts(products)
//         });
//     },[]);

//     consol.log(products)


//   return <div className='plansscreen'>  </div>
  
// }

// export default PlansScreen
