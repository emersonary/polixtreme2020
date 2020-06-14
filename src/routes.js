import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Streaming from "./containers/streaming";
import Hotsite from "./containers/hotsite";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Hotsite} />
      <Route path="/streaming" component={Streaming} />
    </BrowserRouter>
  );
}
