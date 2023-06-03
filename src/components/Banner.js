//import {component} from 'react';
import Gallery from './Gallery';
//import vehicles from '../data/vehicles';
import Button from "./Button";

function Banner(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <div className="container">
        <p>{props.text}</p>
      </div>
      <div className="container">
        <Button type="primary" />
        <Button type="secondary" />
      </div>
        <div className="grid">
          <Gallery vehicles={props.vehicles} />  
        </div>
    </section>
  );
}

export default Banner;
