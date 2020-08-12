
const State={
  userName:'',
  email:'',
  password:'',
  error:null,
  loading:false,
  isAuth:null,
  user:null,
  logout:null
}
const authReducer=(state=State,action) =>{
  // console.log(action)
const {loading}= state
 switch (action.type) {
   
  case "field":{
   
    if(action.email||action.email===''){
      console.log("enter")
      return{
        ...state,
        email:action.email
      }
    }else
    if(action.password||action.password===''){
      return{
        ...state,
        password:action.password
      }
    }else
    if(action.userName||action.userName===''){
      return{
        ...state,
        userName:action.userName
      }
    }
    else return {...state}
   
   }
   case "submit": {
     return{
       ...state,
      loading:true
     }
    }
   case "success":{
     console.log('useReducer')
     return{
      ...state,
      loading:false,
      isAuth:true
     }
   }
   case "error":{
    return{
       ...state,
      loading:false,
      error:'...',

     }
    }
   case "logout":{  

      return{
        ...state,
        loading:false,
        isAuth:false
       }
    
   }
   case "clearError":{  
    return{
      ...state,
      error:null
    }
   }
   default:
    return state;
 }
}


export {authReducer,State}


