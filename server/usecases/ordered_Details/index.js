
const imgBuffer= require('../../helpers/imageBuffer')
function setOrderDetails({products,user,charge,totalPrice,quantity}){
  // console.log(products,user._id,charge,totalPrice,quantity)
  // products

  // for(let produc of products){
  //   const buffer = getImage(produc.imgSrc)
  //   produc.imgSrc = buffer
  // }
 products=products.map(async(produc)=>{
    produc.imgSrc='http://localhost:3000'+produc.imgSrc
    const buffer  = await  imgBuffer(produc.imgSrc);
    produc[prod_img] = buffer;
   return produc
  })
 
  const pro = products.map((pro)=>{
   return seralizeObject(pro)
  })

  function seralizeObject(produc){
    produc[prod_id]=produc.id
    produc[prod_name]=produc.title;
    // produc[prod_img]=buffer;
    produc[prod_quantity]=produc.qty;
    produc[prod_price]=produc.price;
    produc[prod_totalPrice]=produc.totalPrice;
    delete produc[id];
    delete produc[title];
    delete produc[qty];
    delete produc[price];
    delete produc[totalPrice];
    delete produc[imgSrc];
    // console.log(produc)
    return produc
  }
  const orderProduct={
    buyed_products:pro,
    prod_owner:user._id,
    prod_totalPrices:totalPrice,
    prod_totalQty:quantity,
    
  }
 
  let result = await DB.insert(orderProduct)
  console.log(result)
  return result

  //  console.log(products)
  // db.insert(products,user._id,totalPrice,quantity,charge)
}
module.exports={setOrderDetails}
//  information store 
// {
  // products,
  // user._id,
  // charge.id,amount, billing_details, email,name,phone,paid: true,shipping
  // payment_intent: null,
  // payment_method: 'card_1HEeMTDhzObmXdNxzsSueS2P',receipt_email: 'abu@gm.io',
  // 240$, 3quantity
// }