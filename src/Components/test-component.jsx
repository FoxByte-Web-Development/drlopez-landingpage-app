import NavBar from "./Navbar/navbar-component";
import HomeComponent from "./HomeComponent/home-component";

const Test = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="mt-12">
        <HomeComponent />
      </div>

    </div>
  );
};

export default Test;
