import React from "react";
import Home from "./routes/Home";
import cate_101 from "./routes/cate_101";
import cate_102 from "./routes/cate_102";
import cate_118 from "./routes/cate_118";
import cate_119 from "./routes/cate_119";
import cate_122 from "./routes/cate_122";
import cate_124 from "./routes/cate_124";
import cate_126 from "./routes/cate_126";
import cate_128 from "./routes/cate_128";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/cate_101" exact={true} component={cate_101} />
      <Route path="/cate_102" exact={true} component={cate_102} />
      <Route path="/cate_118" exact={true} component={cate_118} />
      <Route path="/cate_119" exact={true} component={cate_119} />
      <Route path="/cate_122" exact={true} component={cate_122} />
      <Route path="/cate_124" exact={true} component={cate_124} />
      <Route path="/cate_126" exact={true} component={cate_126} />
      <Route path="/cate_128" exact={true} component={cate_128} />
      <Route path="/book_detail" exact={true} component={Detail} />
    </HashRouter>
  );
}

export default App;
