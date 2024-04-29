import { BarChart } from "./BarChart";
import logoUrl from "./assets/logo.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <div className="row">
        <div className="logo-wrapper">
          <img src={logoUrl} alt="org logo"></img>
        </div>
        <h2 className="dashboard-title">Title</h2>
      </div>
      <BarChart />;
    </>
  );
}

export default App;
