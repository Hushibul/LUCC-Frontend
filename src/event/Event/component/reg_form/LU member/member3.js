import React from "react";

export default function Member3() {
    return (
        <div style={{ height: "auto", padding: "20px" }}>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 border-right border-top border-left border-bottom  p-1">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">
                                Edogaru
                            </span>
                            <span className="text-black-50">
                                edogaru@mail.com.my
                            </span>
                            <span> </span>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="font-weight-bold">
                                        ID:{" "}
                                    </label>
                                    <label
                                        style={{ marginLeft: "10px" }}
                                    >
                                        {" "}
                                        1812020158
                                    </label>
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                                <button
                                    className="btn btn-primary "
                                    type="button"
                                >
                                    Registerd
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 border-right border-top border-left border-bottom  p-1">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">
                                    i am from LU CC member
                                </h4>{" "}
                                <hr></hr>
                                {/* <h4 className="text-right">Profile Settings</h4> */}
                            </div>
                            {/* <div className="row mt-2">
            <div className="col-md-6">
              <label className="labels">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="first name"
                defaultValue
              />
            </div>
            <div className="col-md-6">
              <label className="labels">Surname</label>
              <input
                type="text"
                className="form-control"
                defaultValue
                placeholder="surname"
              />
            </div>
          </div> */}
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">
                                        Select Contest
                                    </label>
                                    <select
                                        style={{
                                            borderStyle: "inset",
                                            height: "30px",
                                        }}
                                    >
                                        <option selected>
                                            Contest name
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">
                                            Three
                                        </option>
                                    </select>
                                </div>

                                <div className="col-md-12">
                                    <label
                                        className="labels"
                                        style={{ fontSize: "20px",paddingTop:'10px' }}
                                    >
                                        Member 1 Details
                                    </label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                    // defaultValue
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">
                                        Student ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                    // defaultValue
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                    // defaultValue
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        T-Shirt Size
                                    </label>
                                    <select className="form-control">
                                        <option selected>
                                            -SELECT-
                                        </option>
                                        <option value="1">X</option>
                                        <option value="2">L</option>
                                        <option value="3">M</option>
                                        <option value="3">XL</option>
                                    </select>
                                </div>

                             

                 {/*------------------- Memmber2----------------------- */}
                                <div className="col-md-12">
                                    <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Member 2 Details</label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                    // defaultValue
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Student ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                    // defaultValue
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                    // defaultValue
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">T-Shirt Size</label>
                                    <select className="form-control" >
                                        <option selected>-SELECT-</option>
                                        <option value="1">X</option>
                                        <option value="2">L</option>
                                        <option value="3">M</option>
                                        <option value="3">XL</option>
                                    </select>
                                </div>


                                 {/*------------------- Memmber3----------------------- */}
                                 <div className="col-md-12">
                                    <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Member 3 Details</label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                    // defaultValue
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Student ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                    // defaultValue
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                    // defaultValue
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">T-Shirt Size</label>
                                    <select className="form-control" >
                                        <option selected>-SELECT-</option>
                                        <option value="1">X</option>
                                        <option value="2">L</option>
                                        <option value="3">M</option>
                                        <option value="3">XL</option>
                                    </select>
                                </div>

{/* ------------------------transaction id------------------------------ */}
                                <div className="col-md-12">
                                     <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Payment</label>
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Bkass/Nagad/Rocket  Transaction id</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Transaction id"
                                    // defaultValue
                                    />
                                </div>

                            </div>
                            {/* <div className="row mt-3">
            <div className="col-md-6">
              <label className="labels">Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="country"
                defaultValue
              />
            </div>
            <div className="col-md-6">
              <label className="labels">State/Region</label>
              <input
                type="text"
                className="form-control"
                defaultValue
                placeholder="state"
              />
            </div>
          </div> */}
                            <div className="mt-5 text-center">
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-4">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center experience">
            <span>Edit Experience</span>
            <span className="border px-3 p-1 add-experience">
              <i className="fa fa-plus" />
              &nbsp;Experience
            </span>
          </div>
          <br />
          <div className="col-md-12">
            <label className="labels">Experience in Designing</label>
            <input
              type="text"
              className="form-control"
              placeholder="experience"
              defaultValue
            />
          </div>{" "}
          <br />
          <div className="col-md-12">
            <label className="labels">Additional Details</label>
            <input
              type="text"
              className="form-control"
              placeholder="additional details"
              defaultValue
            />
          </div>
        </div>
      </div> */}
                </div>
            </div>
        </div>
    );
}
