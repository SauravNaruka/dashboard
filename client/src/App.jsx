import { LineChart } from "./LineChart";
import { Header } from "./Header";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <main className="h-full">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 flex justify-center">
          <LineChart />
        </div>
      </main>
    </>
  );
}

export default App;
