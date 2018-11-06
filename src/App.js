import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SectionCV from "./component/SectionCV";

const mesInfos = [
  {
    title: "Mes experiences",
    items: [
      {
        title: "allo casse auto",
        details: "Blabla"
      },
      {
        title: "eiffage",
        details: "Blabla666"
      }
    ]
  },
  {
    title: "Ma formation",
    items: [
      {
        title: "Bts Assistant de GESTION",
        details: "Totototo"
      },
      {
        title: "BAC STTG",
        details: "Tatata"
      }
    ]
  },
  {
    title: "Mes Loisirs",
    items: [
      {
        title: "TENNIS",
        details: "Tutututu"
      },
      {
        title: "REACT",
        details: "Love"
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {mesInfos.map(info => {
          return (
            <SectionCV key={info.title} title={info.title} items={info.items} />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
