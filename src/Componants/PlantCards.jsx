import React from 'react';
import { Link } from 'react-router';

const PlantCards = ({plant}) => {
    const {name,image,description,alt,price,category}=plant
    return (
      
   <div>
     <div className="card mt-4 bg-base-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
  <figure>
    <img className='h-64 w-full'
      src={image}
      alt={alt} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-medium'>Category : {category}</p>
    <p>{description}</p>
    <p className='font-medium'>Price : {price}$</p>
    <div className="card-actions justify-end">
      <Link
      state={plant}
       to={`/plants-details/${plant.id}`} 
       className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
   </div>
    );
};

export default PlantCards;