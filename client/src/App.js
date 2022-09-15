import React, { useState} from 'react';
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]=useState("")
const[t,setTech]=useState("")
const[s,setSub]=useState("")

  const submitReview=()=>
  {
Axios.post('http://localhost:9006/student',
{
name:sname,
tech:t,
sub1:s}).then(()=>{
  alert("sucess")
});
  };
return (
<div className="App">
<h1> CRUD Application Demo </h1>

<div className="information">
<label><b> Student Name</b></label>
  <input type="text" name="sname" onChange= { (e)=>
  {
setStudentName(e.target.value);
  }
  }required/>

  <label><b> Technology</b></label>
  <input type="text" name="t" onChange= { (e)=>
  {
setTech(e.target.value);
  }
  }required/>

  <label><b> Subject</b></label>
  <input type="text" name="s" onChange= { (e)=>
  {
setSub(e.target.value);
  }
  }required/>

  
  <button onClick={submitReview}><b> Submit </b></button>
</div>

</div>);
}
export default App