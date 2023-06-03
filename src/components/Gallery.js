function Gallery({id, image, description}) {
  return (
    <div className="column" key={id}>
      <img  src={image} alt={description} />
    </div>
  );
}

export default Gallery;
