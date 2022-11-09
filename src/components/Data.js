export default function() {
    const Data = []
    fetch("https://fakestoreapi.com/products")
    .then(response=>{
      if(!response.ok){
        throw Error("could not fetch the data")
      }
      return response.json()
    })
    .then(data=>Data=data)
    .catch((error) => {
      console.log(error.message)
    })
    return Data
}