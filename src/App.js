import "./style.css";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Intro />
      <div class="container">
        <div class="box box-1">
          <img class="photo" src="./images/fon.png" alt="" />
          <div class="overlay">
            <div class="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div class="box box-2">
          <img class="photo" src="./images/55.png" alt="" />
          <div class="overlay">
            <div class="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div class="box box-3">
          <img class="photo" src="./images/11.png" alt="" />
          <div class="overlay">
            <div class="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div class="box box-4">
          <img class="photo" src="./images/22.png" alt="" />
          <div class="overlay">
            <div class="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div class="box box-5">
          <img class="photo" src="./images/33.png" alt="" />
          <div class="overlay">
            <div class="text">
              <h2>Hello World</h2>
              <p>Jakiś opisik..</p>
            </div>
          </div>
        </div>
        <div class="box box-6">
          <img class="photo" src="./images/44.png" alt="" />
          <div class="overlay">
            <div class="text">
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
