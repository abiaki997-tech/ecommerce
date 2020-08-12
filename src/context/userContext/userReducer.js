export const CART_PRODUCTS = 'CART_PRODUCTS';
export const HOME_PRODUCTS = 'HOME_PRODUCTS';
export const GET_PRODUCTS='GET_PRODUCTS';
export const GET_PRODUCTS_ERROR='GET_PRODUCTS_ERROR';

export const SHOPPING_PRODUCTS = 'SHOPPING_PRODUCTS'
export const INC = 'INC';
export const DEC = 'DEC';
export const REMOVE_PRODUCT='REMOVE_PRODUCT'
export const PURCHASE_SUCCESSFULLY='PURCHASE_SUCCESSFULLY'
export const NOT_SUCCESSFULLY_PURCHASE='NOT_SUCCESSFULLY_PURCHASE'

export default (state, { type, payload,id }) => {
  let {totalPrice,cartProducts,qaty,userBackendProducts,userCartProducts}=state;
  let productS;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
   switch (type) {
     
     case HOME_PRODUCTS:
       return{
         ...state,
         userHomeProducts:[payload]
       }
     case CART_PRODUCTS:
       updatedQty=payload.qty;
       totalPrice=payload.totalPrice;
       console.log(payload.qty)
       return{
         ...state,
         userCartProducts:[payload,...userCartProducts],
         qaty:updatedQty,
         totalPrice:totalPrice
       }
     case GET_PRODUCTS:
       console.log(payload)
       let total= payload.reduce((currentTotal,item)=>{
         return item.totalPrice+currentTotal
       },0)
       let qt = payload.reduce((currentTotal,item)=>{
        return item.qty+currentTotal
      },0)
       return{
        ...state,
       userBackendProducts:payload,...cartProducts,
       qaty:qt,
       totalPrice:total
    
       } 
     case GET_PRODUCTS_ERROR:
       return{
         ...state,
         error:payload
       }     
    
      case SHOPPING_PRODUCTS:
       
       let newArr=userCartProducts.concat(userBackendProducts)
       console.log(newArr)
       let totdal= newArr.reduce((currentTotal,item)=>{
        return item.totalPrice+currentTotal
      },0)
      let qtd = newArr.reduce((currentTotal,item)=>{
       return item.qty+currentTotal
     },0)
       console.log(newArr)
      return{
        ...state,
        totalPrice:totdal,
        qaty:qtd,
        cartProducts:newArr,...cartProducts
      }   
     case  INC:
       
       product = cartProducts.find(product => product.id === id);
       index = cartProducts.findIndex(product => product.id === id);
       console.log(product,index)
      //  product quantity inc
       product.qty = product.qty + 1;
       //state quantity inc
       updatedQty=parseInt(qaty)+1;
       product.totalPrice =  parseInt(product.totalPrice) + parseInt(product.price);
       totalPrice =  parseInt(totalPrice) + parseInt(product.price);
      //  console.log( totalPrice);

       console.log(cartProducts[index])
      //  updated
       cartProducts[index]=product;
      return{
        ...state,
        cartProducts: [...cartProducts],
        totalPrice:totalPrice,
        qaty:updatedQty
      }   
     case DEC:
      product =cartProducts.find(product => product.id === id);
      index = cartProducts.findIndex(product => product.id === id);
     //  product quantity inc
      if(product.qty > 1){
      product.qty = product.qty - 1;
      product.totalPrice =  parseInt(product.totalPrice) - parseInt(product.price);
      totalPrice =  parseInt(totalPrice) - parseInt(product.price);
      //state quantity inc
      console.log('qaty',qaty)
      updatedQty=parseInt(qaty)-1;
      cartProducts[index]=product;
     return{
       ...state,
       cartProducts:[...cartProducts],
       totalPrice:totalPrice,
       qaty:updatedQty
     }      
     }else{
      console.log('qaty',qaty)
       return{
        ...state,
        cartProducts:[...cartProducts],
        // qaty:qaty
      }
     }
     case REMOVE_PRODUCT:
        const filtered = cartProducts.filter(cart => cart.id !== id);
        product = cartProducts.find(cart => cart.id === id);
        console.log('product',product)
        updatedPrice = totalPrice - product.price * product.qty;
        updatedQty = qaty - product.qty;
        return {
          ...state,
          cartProducts: [...filtered], 
          totalPrice: updatedPrice, 
          qaty: updatedQty
        }
     case PURCHASE_SUCCESSFULLY:
       return{
         ...state,
         success:true,
         cartProducts:[],
         totalPrice:0,
         qaty:0
       }
    case NOT_SUCCESSFULLY_PURCHASE:
        return{
          ...state,
          success:false
        }           
     default:
       return state
   }
 }

