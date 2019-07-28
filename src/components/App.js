import React from "react";
import PhotoGallery from "./photoGallery/PhotoGallery";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PhotoDetails from "./photoGallery/PhotoDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/photo/:photo_id" component={PhotoDetails} />
          <Route path="/page/:id" component={PhotoGallery} />
          <Route path="/" component={PhotoGallery} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
