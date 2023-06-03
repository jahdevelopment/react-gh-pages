
import Gallery from './Gallery';
//import vehicles from './data/vehicles';
import Button from "./Button";

function Banner(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <div className="container">
        <p>{props.text}</p>
      </div>
      <div className="container">
        <Button type="primary" />
        <Button type="secondary" />
      </div>
        <div className="grid">
        {props.vehicles.map((vehicle) => (
          <Gallery 
            key={vehicle.id}
            src={vehicle.image}
            alt={vehicle.description}
        />
        ))}
          
        </div>
    </>
  );
}

export default Banner;
