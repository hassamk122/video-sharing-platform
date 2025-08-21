const asyncHandler = (requestHandler)=>{
    (request,response,next)=>{
        Promise.resolve(requestHandler(request,response,next))
        .catch((error)=>next(error));
    }
}

export {asyncHandler};



















// const asyncHandler = (func) =>{
//     async(err,request,response,next)=>{
//         try{
//             await func(request,response,next);
//         }
//         catch(error){
//             response.status(err.code || 500).json({
//                 success:false,
//                 message:err.message,
//             });
//         }
//     }
// }