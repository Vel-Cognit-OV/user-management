import React, { useEffect, useState } from 'react';

function PlayerData(props){

  const [pName, setPName] = useState("");
  const [tName, setTName] = useState("");
  const [dataRow, setDataRow] = useState([]);

  const [msg, setMsg] = useState("");

  useEffect(()=>{
    setMsg("Successfully Added!");
    setTimeout(()=>setMsg(""),3000)
  },[dataRow])

  function pNameVal(e){
    setPName(e.target.value)
  }
  function tNameVal(e){
    setTName(e.target.value)
  }
  function createUser(){
    if(pName.length > 0){
      let pd = {"playerName":pName, "teamName":tName};
      let newRow = [...dataRow,pd];
      setDataRow(newRow);
      setPName("");
      setTName("");
    }
  }
  
  function removeRow(a){
    let newArr = [...dataRow];
    newArr.splice(a,1);
    setDataRow(newArr);
  }
  return(
    <div>
        <div style={{padding:"25px"}}>
           <label for="pName" style={{paddingRight:"30px"}}>
             <span style={{paddingRight:"10px"}}>Player Name</span>
             <input type="text" value={pName} id="pName" onChange={pNameVal}/>
           </label>
           <label for="tName" style={{paddingRight:"30px"}} id="pName">
             <span style={{paddingRight:"10px"}}>Team Name</span>
             <input type="text" value={tName} id="tName" onChange={tNameVal}/>
           </label>
           <input type="submit" value="+ Add" onClick={createUser}/>
        </div>
        <div style={{textAlign:"center", background:"#c3c3c3"}}>{msg}</div>
        <table border="1" cellPadding="5" width="100%" style={{margin:"20px"}}>
        <thead>
          <th>Player Name</th>
          <th>Team Name</th>
          <th>Skill</th>
          <th>Option</th>
        </thead>
        <tbody>
          {dataRow.map((item,a)=>(
            <tr>
            <td>{item.playerName}</td>
            <td>{item.teamName}</td>
            <td>Captatin</td>
            <td>Edit | <a href="#" onClick={()=>removeRow(a)}>Delete</a></td>
          </tr>
          ))}
        </tbody>
      </table>    
    </div>
  );
}

function App(){
  return(
    <div>
      <PlayerData/>
    </div>
  )
}

export default App