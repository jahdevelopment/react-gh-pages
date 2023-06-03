function Gallery(props) {
  return (
    <div className="column">
      {props.vehicles.map((vehicle) => (
        <img key={vehicle.id} src={vehicle.image} alt={vehicle.description} />
      ))}
    </div>
  );
}

export default Gallery;
