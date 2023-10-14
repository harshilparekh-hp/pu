import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DestinationList from "./components/DestinationList";
import DestinationFact from "./components/DestinationFact"
import ResetApp from "./components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4">Desination List</h4>
        <DestinationList />
        <DestinationFact />
      </div>
      
      <Footer />
    </Provider>
  </div>
);
