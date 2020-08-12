
const Jimp = require('jimp')

async function ImageBuffer(img){
console.log(img)
 const buffer= Jimp.read(img)
              .then(lenna =>{
                  return lenna.getBuffer(Jimp.MIME_PNG,(err,buffer)=>{
                   if(err){
                    //  console.log({err})
                     return err
                   } 
                  //  console.log({buffer})
                   return buffer.bitmap.data
                  } )
                })
                .catch(err => {
                  // console.log({err2:err})
                  return err
                });
 return buffer 
  
}
module.exports=ImageBuffer