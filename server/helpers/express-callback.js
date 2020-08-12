// Take from express request to JS pure object

const makePureObject = (controller)=>{
  
  return (req,res)=>{

    console.log(req.get('Content-Type')) 
     const httpRequest ={
       body:req.body,
       token:req.cookies.authToken,
       method:req.method,
       path:req.path,
       query:req.query,
       params:req.params,
       ip:req.ip,
       headers:{
         'Content-Type':req.get('Content-Type'),
       }
     }
    controller(httpRequest)
      .then(httpResponse=>{
        if(httpResponse.headers){
          res.set(httpResponse.headers)
        }
        res.type('json')
        if(httpResponse.token){
          // console.log(token)
         res.cookie('authToken',httpResponse.token,{
          httpOnly: true,
          // secure: true
          // sameSite: true,
         })
        }
        return  res.status(httpResponse.status)
             .send(httpResponse.body)
       
      }) 
      .catch(e=>res.status(500).send({error:e}))
  }

}

module.exports=makePureObject