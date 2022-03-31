import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect ,useHistory,Link} from 'react-router-dom';
import { clearErrors, getControllerDetails, getControllerDetails_schedule} from "../../../actions/userAction";


 function Schedule() {



  const dispatch = useDispatch();
  
  const {error, loading, user } = useSelector((state) => state.userDetails);
 
  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    console.log('rimel')
    
    dispatch(getControllerDetails_schedule('61ea928519b96b1c144c4bbb'));
    
  }, [dispatch, alert, error ]);



    return (
        <div>
             {/* Section Conference Schedule*/}
        <section className="section section-lg bg-default text-center">
          <div className="container">
            <h3>Event Schedule plan</h3>
            <h6>Download the Schedule.</h6>
            <div
              className="tabs-custom tabs-horizontal tabs-corporate"
              id="tabs-1"
            >
              {/*Nav tabs*/}
              <ul className="nav nav-tabs">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link nav-link nav-link-secondary-darker"
                    href={user.schedule}
                    data-toggle="tab"
                    data-triangle=".nav-link-overlay"
                  >
                    <span className="nav-link-overlay" />
                    <span className="nav-link-cite">First Day</span>
                    <span className="nav-link-title">{user.day1}</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link nav-link-purple-heart"
                    href="#tabs-1-2"
                    data-toggle="tab"
                    data-triangle=".nav-link-overlay"
                  >
                    <span className="nav-link-overlay" />
                    <span className="nav-link-cite">Second Day</span>
                    <span className="nav-link-title">{user.day2}</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link nav-link-primary"
                    href="#tabs-1-3"
                    data-toggle="tab"
                    data-triangle=".nav-link-overlay"
                  >
                    <span className="nav-link-overlay" />
                    <span className="nav-link-cite">Third Day</span>
                    <span className="nav-link-title">{user.day3}</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link nav-link-secodanry"
                    href="#tabs-1-4"
                    data-toggle="tab"
                    data-triangle=".nav-link-overlay"
                  >
                    <span className="nav-link-overlay" />
                    <span className="nav-link-cite">Fourth Day</span>
                    <span className="nav-link-title">{user.day4}</span>
                  </a>
                </li>
              </ul>
             
              {/*Tab panes*/}
           
            </div>
          </div>
        </section>
        </div>
    )
}

export default Schedule