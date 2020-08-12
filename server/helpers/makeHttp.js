function makeHttpError({status,errorMessage}){
  return{
    headers:{
      'Content-Type':'application/json'
    },
    status,
    body:{
      success:false,
      error:errorMessage
    }
  }
}
function makeHttpSuccess({status,data,token}){
  if(token){
    return{
      headers:{
        'Content-Type':'application/json'
      },
      status,
      body:{
        success:true,
        data
      },
      token
    }
  }
  else{
    return{
      headers:{
        'Content-Type':'application/json'
      },
      status,
      body:{
        success:true,
        data
      }
    }
  }

 
}


module.exports={makeHttpError,makeHttpSuccess};