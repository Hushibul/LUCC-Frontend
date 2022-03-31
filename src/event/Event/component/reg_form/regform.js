import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';



export default function BasicGrid() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
        setAge(event.target.value);
    }



    return (

        <Grid container  >

            <Grid item xs={12} md={4}  >
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: '100vh', width: "100%", padding: "10px" }}>
                    <div style={{ background: 'yellow', height: '200px', width: '200px' }}>

                    </div>
                </div>
            </Grid>


            <Grid item xs={12} md={8} style={{ backgroundColor: 'green', backgroundImage: "url('https://images.cdn2.stockunlimited.net/preview1300/music-event-background-concept_1934548.jpg')"}}>
                <Grid 
                   
                    style={{ height:'100vh', padding:'20px',display:'flex',justifyContent:'center',alignItems:'center' }}>

                    {/* <Grid container  direction="row" xs={12} md={8}> <h3>Registration Status</h3>
                        <button style={{ height: '30px', width: '60px', borderRadius: '20px' }} >active</button>
                    </Grid> */}

                    <Grid style={{
                        // backgroundColor: 'white'

                    }}>

                       
                        <Grid container sx={{width:'100%',padding:'20px', backgroundColor: 'white',borderRadius:'20px',  typography: 'body1',boxShadow:' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px' }} >
                            <TabContext value={value}>
                                <Grid sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList variant="scrollable"scrollButtons="auto"aria-label="scrollable auto tabs example"indicatorColor="secondary" onChange={handleChange} textColor="inherit" style={{background:"#1976d2",color:'white'}} >
                                        <Tab label="One Member Form" value="1" />
                                        <Tab label=" Two Member Form" value="2" />
                                        <Tab label=" Three Member Form" value="3" />
                                        <Tab label=" Four Member Form" value="4" />
                                    </TabList>
                                </Grid>
                                <TabPanel value="1" xs={12} md={12} >



                                    <Grid sx={12} md={12}> <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"

                                    >
                                        <TextField defaultValue="" size="small" id="standard-basic" label="Full Name" variant="standard" />
                                        <TextField defaultValue="" size="small" id="standard-basic" label="Phone Number" variant="standard" />
                                        <TextField defaultValue="" size="small" id="standard-basic" type='email' label="Email" variant="standard" />
                                        <TextField defaultValue="" size="small" id="standard-basic" label="Password" variant="standard" />
                                    </Box>
                                    </Grid>

                                </TabPanel>

                                <TabPanel value="2">
                                    <Grid sx={12} md={12}> <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"

                                    >
                                        <TextField defaultValue="" size="small" id="standard-basic" label="Full Name" variant="standard" />
                                        <TextField defaultValue="" size="small" id="standard-basic" label="Phone Number" variant="standard" />
                                        <TextField defaultValue="" size="small" id="standard-basic" type='email' label="Email" variant="standard" />
                                        <TextField defaultValue="" size="small" id="standard-basic" label="Password" variant="standard" />
                                    </Box>
                                    </Grid>
                                </TabPanel>

                                <TabPanel value="3">  <Grid sx={12} md={12}> <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"

                                >
                                    <TextField defaultValue="" size="small" id="standard-basic" label="Full Name" variant="standard" />
                                    <TextField defaultValue="" size="small" id="standard-basic" label="Phone Number" variant="standard" />
                                    <TextField defaultValue="" size="small" id="standard-basic" type='email' label="Email" variant="standard" />
                                    <TextField defaultValue="" size="small" id="standard-basic" label="Password" variant="standard" />
                                    <Grid>
                                        <h6>Select Contest </h6>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Contest</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Contest"
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Box>
                                </Grid>
                                </TabPanel>

                                <TabPanel value="4">
                                    <div className="row mt-2">
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
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label className="labels">Mobile Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="enter phone number"
                                                defaultValue
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="labels">Address Line 1</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="enter address line 1"
                                                defaultValue
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="labels">Address Line 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="enter address line 2"
                                                defaultValue
                                            />
                                        </div>
                                        </div>
                                </TabPanel>
                            </TabContext>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    );
}
