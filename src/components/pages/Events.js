import React, { Fragment } from "react";
import Header from "../layouts/Header_lucc_2";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footertwo";
import Event1 from "../sections/Lucc/Events/event1";
import Event2 from "../sections/Lucc/Events/event2";
import Event3 from "../sections/Lucc/Events/event3";

class Event extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Events" }} />
        <Event1 />
        <Event2 />
        <Event3 />
        <Footer />
      </Fragment>
    );
  }
}

export default Event;
