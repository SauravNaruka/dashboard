import { LineChart } from "./LineChart";
import { Header } from "./Header";
import { getDefects } from "./api/defectsApi";
import "./App.css";

function App() {
  const handleClick = () => {
    getDefects();
  };
  return (
    <>
      <Header></Header>
      <main className="h-full">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 flex justify-center">
          <LineChart />
        </div>
        <button onClick={handleClick}>Get Data</button>
      </main>
    </>
  );
}

export default App;
