export default class IWebService{
      data=[
             {
                 id:1,
                 name:'Production-Ready',
                 author:'John'
             },
             {
                id:2,
                name:'Release-IT',
                author:'Michael T. N'
            }
         ];
     

     getMovies(){
         return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                resolve(this.data)
                reject(new Error('JKBHFUTFTYFD'))
             },700)
         })
     }

}

