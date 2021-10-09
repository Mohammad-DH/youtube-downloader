import Input from "./components/input";
import Loader from "./components/loader";
import Panel from "./components/panel";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src="./assets/logo.png" alt="" />
      </div>

      <Loader />
      <div className="content">
        <Input />
        <Panel />
      </div>

      <style jsx>{`
        .header_btn_mobile {
          display: none;
        }
        .App {
          width: 100vw;
          height: 100vh;
          background-image: url("./assets/BG6.jpg");
          background-size: cover;
          background-repeat: repeat;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 7vh;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo {
          height: 4rem;
          position: absolute;
          top: 20%;
          left: 1%;
        }
        .content {
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @media only screen and (max-width: 600px) {
          .header_btn {
            display: none;
          }
          .header_btn_mobile {
            display: flex;
          }
          .header_btn_mobile img {
            width: 5rem;
            position: absolute;
            right: 2%;
            top: 2%;
          }
          .logo {
            padding-right: 4rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
