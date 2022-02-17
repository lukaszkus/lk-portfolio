import "./style.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="container">
        <div className="box box-1">
          <img className="photo" src="./images/fon.png" alt="" />
          <div className="overlay">
            <div className="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div className="box box-2">
          <img className="photo" src="./images/55.png" alt="" />
          <div className="overlay">
            <div className="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div className="box box-3">
          <img className="photo" src="./images/11.png" alt="" />
          <div className="overlay">
            <div className="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div className="box box-4">
          <img className="photo" src="./images/22.png" alt="" />
          <div className="overlay">
            <div className="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div className="box box-5">
          <img className="photo" src="./images/33.png" alt="" />
          <div className="overlay">
            <div className="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div className="box box-6">
          <img className="photo" src="./images/44.png" alt="" />
          <div className="overlay">
            <div className="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
