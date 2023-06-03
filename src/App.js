import "./style/index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import vehicles from './data/vehicles';

function App() {
  let GitHubUrl = "https://github.com/jahdevelopment";
  let mittProgram =
    "https://mitt.ca/programs/post-secondary-programs/1759/software-developer";
  let linkedInUrl = "https://www.linkedin.com/in/juanhdev/";
  let myTitle = "Be Creative";
  let myText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  let myLinkedIn = "https://www.linkedin.com/in/j-alberto-hernandez/";
  let myTwitter = "https://twitter.com/Juan_Hernandez_";
  let myInstagram = "https://www.instagram.com/juan.alberto.hernandez/";

  return (
    <>
      <div className="App">
        <Header
          home={GitHubUrl}
          aboutUs={mittProgram}
          contactMe={linkedInUrl}
        />

        <div className="banner">
          <Banner
            title={myTitle}
            text={myText}
            vehicles={vehicles}
          />
        </div>

        <Footer
          linkedIn={myLinkedIn}
          twitter={myTwitter}
          instagram={myInstagram}
        />
      </div>
    </>
  );
}

export default App;
