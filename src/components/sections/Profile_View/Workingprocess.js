import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getUserDetails } from "../../../actions/userAction";

const Workingprocess = () => {

  const dispatch = useDispatch();
  const { pid } = useParams();
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getUserDetails(pid));
  }, [dispatch, alert, pid]);

  return (

    <div className="container mt-5" style={{ background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset' }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-7" style={{ background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset' }}>
          <div className="card p-3 py-4" style={{ background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset' }}>
            <div className="text-center"> <img style={{ height: "150px", width: "150px", borderRadius: "50%", objectFit: 'cover' }} src={user.pofilePicture} /> </div>
            <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">{user.position}</span>
              <h5 className="mt-2 mb-0">{user.firstName + " " + user.lastName}</h5> <span>Leading University </span>
              <div className="px-4 mt-1">
                <p className="fonts">Depertment of {user.depertment + "batch" + " " + user.batch} </p>
                <p className="fonts">{"Email:" + user.email} </p>
              </div>
              <ul className="social-list" style={{ color: "#8E24AA", fontSize: "19px" }}>
                <li><i className="fa fa-facebook" /></li>
                <li><i className="fa fa-dribbble" /></li>
                <li><i className="fa fa-instagram" /></li>
                <li><i className="fa fa-linkedin" /></li>
                <li><i className="fa fa-google" /></li>
              </ul>
              <div className="buttons"> <Link to="/committee" className="btn btn-outline-primary px-4">Back</Link>
                {/* <button className="btn btn-primary px-4 ms-3">Contact</button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Workingprocess;