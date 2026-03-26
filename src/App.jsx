import AddSurplus from "./components/AddSurplus";
import AddDemand from "./components/AddDemand";
import SurplusList from "./components/SurplusList";
import DemandList from "./components/DemandList";
import Matches from "./components/Matches";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Real-Time Surplus Engine</h1>

      <AddSurplus />
      <AddDemand />

      <h2>Available Surplus</h2>
      <SurplusList />

      <h2>Demand Requests</h2>
      <DemandList />

      <h2>Matches</h2>
      <Matches />
    </div>
  );
}

export default App;