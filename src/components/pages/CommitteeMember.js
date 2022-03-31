import React, { Fragment } from "react";
import Header from "../layouts/Header_lucc_2";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footertwo";
import CommitteeBlock from "../sections/Lucc/Community/CommitteeBlock";

class Committee extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Committee Member" }} />
        <CommitteeBlock />
        <Footer />
      </Fragment>
    );
  }
}

export default Committee;
