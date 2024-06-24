import{useEffect,useState} from "react"
export default function Card() {
let [formData,setformData] =useState([])
useEffect(()=>{
  const fetchData = async()=>{
  const response =await fetch("http://localhost:8000/bookingdata")
  const jsonresponse = await response.json()
  setformData(jsonresponse);
 
  }
  fetchData()
},[])
console.log(formData);

  return (
    <>
    {formData.map((item,index)=>(
      <div className="m-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={`http://localhost:8000/image/${item.hotelimage}`} alt="Hotel Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.hotelname}</div>
              <p className="text-gray-700 text-base">
           <p>{item.hotelphone}</p>
           <p>{item.hotelemail}</p>
           <p>{item.hotellocation}</p>
           <p>{item.hotelrent}</p>
           <p>{item.hotelimage}</p>
            </p>
            </div>
          </div>
        </div>
      </div>
    ))}
      
    </>
  );
}
