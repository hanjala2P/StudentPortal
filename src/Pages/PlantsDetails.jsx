
import React, { useContext } from 'react';
import { useLocation,useNavigate,} from 'react-router';
import { CartContext } from '../Providers/CartContex';

const PlantsDetails = () => {
  const {setCart} =useContext(CartContext)
  // const {cart,setCart} =useContext(CartContext)
  
 
    // const {id} =useParams()
    // console.log(id);
    // const [plant, setPlant]=useState({})
      // useEffect(()=>{
        // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        // .then(res=>res.json())
        // .then(data=> setPlant(data?.plants))
        // axios(`https://openapi.programming-hero.com/api/plant/${id}`)
        // .then(res=>res.data)
        // .then(data=> setPlant(data?.plants))
    // },[id])
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    // const {data}=useLoaderData()
    // console.log(data);
    const {name, description, image, price,alt,category}= location.state || {}
    return (
        
        <div  className='m-10'> 
  
             <div>
           <div className="card bg-base-100 max-w-5xl h-128 mx-auto shadow-sm">
  <figure>
    <img
      src={image}
      alt={alt} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='font-medium'>Category :{category}</p>
    <p className='mt-1'>{description}</p>
    
    <p className='text-xl font-medium'>Price : ${price} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary"
      onClick={()=>setCart((prv)=>[...prv,location?.state])}>Add to Cart</button>
      <button className="btn btn-primary" onClick={()=> navigate(`/add-to-cart/`, {state:location.state})}>Buy Now</button>
      
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default PlantsDetails;