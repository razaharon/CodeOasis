import React from "react";
import { store } from "./peer-store/store";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import PeersTable from "./components/PeersTable/PeersTable";
import VolatilityChart from "./components/VolatilityChart/VolatilityChart";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Container className="container">
          <PeersTable />
        </Container>
        <Container className="container">
          <VolatilityChart />
        </Container>
      </React.Fragment>
    </Provider>
  );
}

export default App;
