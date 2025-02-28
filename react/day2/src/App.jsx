import React from "react";
import Home from "./pages/home";
import Contactus from "./pages/Contactus";
import Header from "./Component/Header";
import ImageSection from "./Component/ImageSection";
import BlogCard from "./Component/BlogCard";

class App extends React.Component{
  render(){
    return(
      <>
      <BlogCard />
      <ImageSection />
      <Header />
      <Contactus />
      <Home />
      </>
    )
  }
}

export default App;