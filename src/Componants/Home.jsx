
import PlantCards from './PlantCards';
import { useLoaderData } from 'react-router';
const Home = () => {
    // const [plants, setPlants]=useState([])
    // useEffect(()=>{
    //     fetch('https://openapi.programming-hero.com/api/plants')
    //     .then(res=>res.json())
    //     .then(data=> setPlants(data?.plants))
    // },[])
    const {plants} = useLoaderData()

    return (
        <div>
              <div>
                <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
              </div>
                <div  className='mx-10 my-10'>
                    <p className="text-left text-3xl font-bold">Plant Cards</p>
               <div className='grid grid-cols-1 gap-4 mt-2 justify-items-center my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                 {
                    plants.map(plant => <PlantCards key={plant.id} plant={plant}></PlantCards>)
                }
                </div>
               </div>
        </div>
    );
};

export default Home;