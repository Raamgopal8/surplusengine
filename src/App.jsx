import AddSurplus from "./components/AddSurplus";
import AddDemand from "./components/AddDemand";
import SurplusList from "./components/SurplusList";
import DemandList from "./components/DemandList";
import Matches from "./components/Matches";

function App() {
  return (
    <div className="container">
      <header style={{ padding: "2rem", textAlign: "center", borderBottom: "1px solid var(--outline)" }}>
        <h1 style={{ margin: 0 }}>Surplus Engine</h1>
        <p style={{ color: "var(--on-surface-variant)" }}>Real-time inventory & demand matching</p>
      </header>

      <main className="dashboard">
        <section className="column">
          <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "2rem" }}>
            <AddSurplus />
          </div>
          <h2>Available Surplus</h2>
          <SurplusList />
        </section>

        <section className="column">
          <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "2rem" }}>
            <AddDemand />
          </div>
          <h2>Demand Requests</h2>
          <DemandList />
        </section>

        <section className="column">
          <h2>Live Matches</h2>
          <Matches />
        </section>
      </main>
    </div>
  );
}

export default App;