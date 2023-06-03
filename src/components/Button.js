function Button(props) {
  return (
    <div className="container">
      <button type={props.type}>{props.type}</button>
    </div>
  );
}

export default Button;
