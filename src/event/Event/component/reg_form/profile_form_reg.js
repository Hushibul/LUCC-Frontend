import React from 'react'
import LU_E_Reg from './LU_user_reg_form'
import NON_LU_E_Reg from './Non_LU_user_form'
import { Link } from 'react-router-dom'


import LU_E_Reg_mem_4 from './LU member/member4'

export default function index_form_reg() {


    const token = window.localStorage.getItem('jwt_user_token_v2');
    const token_event = window.localStorage.getItem('jwt_user_token_event');

    return (
        <>
            {token?<LU_E_Reg  />:
            token_event?<NON_LU_E_Reg/> :
            <>
            
                        <div>
                            <div style={{background: 'linear-gradient(180deg, rgb(255, 166, 166), #fff)',backgroundRepeat: "no-repeat" }}>
                                &lt;<div className="container my-5 d-flex justify-content-center">
                                    <div className="row justify-content-center ">
                                        <div className="col">
                                            <div className="card ">
                                                <div className="card-header pb-0 bg-white border-0 text-center px-sm-4">
                                                    <h6 className="text-left mt-4 font-weight-bold mb-0"><span><i className="fa fa-times-circle fa-2x mr-3 " aria-hidden="true" /> </span> You are not authenticated user </h6> <span className="img-1 text-center"><img src="https://i.imgur.com/cGXM38s.png" className="img-fluid my-4 " /></span>
                                                </div>
                                                <div className="card-body px-sm-4 mb-3">
                                                    <ul className="list-unstyled text-muted">
                                                        <li>Please Register first .</li>
                                                        <li>Click green button for registration </li>
                                                        {/* <ul className="mt-2 inner">
                                                            <li>Try restarting wireless connection on this device.</li>
                                                            <li>Move clouse to your wireless access point.</li>
                                                        </ul> */}
                                                    </ul>
                                                    <div className="row justify-content-end mt-4 ">
                                                        <div className="col-auto"><Link type="button" to="/registration" className="btn btn-success"><span>Register Now</span></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
            
            }
        </>
    )
}
