import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import Home from "./components/Home";
import Vitamin from "./components/Vitamin";
import ProductDetails from "./components/ProductDetails";
import Lost from "./components/Lost";
import data from "./data/data.json";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      data: data,
    };
    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo,
    }));
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img
              src={logo}
              className={
                this.state.toggleLogo
                  ? "static-logo"
                  : "static-logo animated jello"
              }
              alt="logo"
              onMouseEnter={this.toggleLogo}
              onMouseLeave={this.toggleLogo}
              onClick={this.openNav}
            />
            <h1
              className={
                this.state.toggleLogo
                  ? "menu-hidden"
                  : "menu animated bounceInDown"
              }
              onClick={this.openNav}
            >
              Menu
            </h1>
            <Navigation closeNav={this.closeNav} />
          </header>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (<Home cards={this.state.data}></Home>)}
            />
            <Route path="/Vitamin" exact component={Vitamin} />
            <Route path="/product/:id" exact render={(props) =>{
              console.log(props.location.pathname);
              let cardNo = props.location.pathname.replace("/product/",'');
              console.log(cardNo);
              return(
                <ProductDetails card={this.state.data[cardNo]} >
                  </ProductDetails>
              );
            }}/>
            <Route component={Lost}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
