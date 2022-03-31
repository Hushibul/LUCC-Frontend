import  React,{useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllBlood_group} from "../../../../actions/userAction";

const columns = [
 
  { field: 'i', headerName: 'ID', width: 40 },
  { field: 'fullname', headerName: 'Full Name', width: 130 },
  
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 70,
  },
  { field: 'Blood_group', headerName: 'Blood Group', width: 130 },
  { field: 'Phone', headerName: 'Phone Number', width: 130 },
  { field: 'address', headerName: 'Address', width: 130 },
  
];
export default function DataTable() {

  const dispatch = useDispatch();
  const [state,setState]=useState([])
  
  
  const {error, loading, users } = useSelector((state) => state.allUsers);
 
  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    
    dispatch(getAllBlood_group());
    
  }, [dispatch, alert, error ]);

      const rows = [];
      var i = 1;

users &&
users.forEach((item) => {
    if(state==state.length>0){
      //or   state.length==0
    rows.push({
        id: item._id, 
        fullname:item.firstName+" "+item.lastName, 
        age:item.age,
        Blood_group:item.blood_group,
        Phone:item.phone_number,
        address:item.address,
        i:i++
        
    });
}else if(item.blood_group==state){  rows.push({
  id: item._id, 
  fullname:item.firstName+" "+item.lastName, 
  age:item.age,
  Blood_group:item.blood_group,
  Phone:item.phone_number,
  address:item.address,
  i:i++
});}
  });

   

  // const rows = 
  //   users&&users.map((item)=>{
  //     // if(item.blood_group==state)
  //     ({ 
  //       id: item._id, 
  //       fullname:item.firstName+" "+item.lastName, 
  //       age:item.age,
  //       Blood_group:item.blood_group,
  //       Phone:item.phone_number
  
  //     })

  //   })  


    
//     const rows = [];

// users &&
// users.forEach((item) => {
//     if(item.role=='user'){
//     rows.push({
//       id: item._id,
//       fname: item.firstName+" "+item.lastName,
//       email: item.email,
//       role: item.role,
//       status:item.reg_status,
//       uid:item.username,
//       pofilePicture:item.pofilePicture
//     });
// }else{ return null}
//   });
     
   
    
  

    return (
        <div style={{flexDirection:'column',display:"flex",justifyContent:'center',alignItems:'center',width:'100%',height:'100vh',background:'brown'}}>
          <div style={{display:"flex",flexDirection:'column',padding:'20px'}}>
            <h1   style={{ color:'snow',background:'brown',boxSshadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>powered by Lucc </h1>
            {/* <input type='text'  onChange={e => setState(e.target.value)} className /> */}

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" style={{ color:'snow',background:'brown'}}>Search</span>
            </div>
            <input onChange={e => setState(e.target.value.toUpperCase())} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Enter the blood group' />
          </div>

            {/* <input type='text'  value={state}  style={{color:'red'}} /> */}
          </div>
        <div style={{ height: 400, width: '80%' ,background:'red',boxSshadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>
          
          <DataGrid
          style={{ color:'snow',background:'brown'}}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            
            
          />
        </div>
        </div>
      );
}


