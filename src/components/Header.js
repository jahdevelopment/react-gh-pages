function Header(props) {
  return (
    <header className="header">
      <a href={props.home} target="_blank" rel="noreferrer">
        Home
      </a>
      <a href={props.aboutUs} target="_blank" rel="noreferrer">
        About Us
      </a>
      <a href={props.contactMe} target="_blank" rel="noreferrer">
        Contact Me
      </a>
    </header>
  );
}

export default Header;
