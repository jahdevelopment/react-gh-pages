function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="bar-footer">
          <ul className="social-media">
            <li>
              <a href={props.linkedIn} target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href={props.twitter} target="_blank" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={props.instagram} target="_blank" rel="noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p>&#174; 2023 Juan Alberto Hernandez.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
