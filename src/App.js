import React,{useState,useEffect} from 'react';
import './App.css';

function AddForm(props){
  const[pName, setPName] = useState(props.playerName);
  const[tName, setTName] = useState(props.teamName);


  const[dataRow,settdataRow] = useState([]);

  const[msg,setMsg]= useState("");

  useEffect(()=>{
    setMsg("Alert Msgg");
    setTimeout(()=>setMsg(""),3000)
  },[dataRow]);

  function onChangeName(a){
    setPName(a.target.value);
  }
  function onChangeTeam(a){
    setTName(a.target.value);
  }
  function createPlayer(){
    let pd = {"PlayerName":pName, "TeamName":tName};
   let newRows=[...dataRow,pd];
   settdataRow(newRows);

  }

  return(
    <>
      <div>
        <span style={{paddingRight:"30px"}}>
          <label style={{paddingRight:"10px"}}>Player Name</label><input value={pName} onChange={onChangeName}/>          
        </span>
        <span>          
          <label style={{paddingRight:"10px"}}>Team Name</label><input value={tName} onChange={onChangeTeam}/>
        </span>
        <span style={{paddingLeft:"30px"}}>
          <input type="submit" value="+ Create" onClick={createPlayer}/>
        </span>
      </div>
      <span style={{}}>{msg}</span>
      <table border={"1"} width={"100%"} style={{marginTop:"50px"}}>
        <tr>
          <th>S No</th>
          <th>Player Name</th>
          <th>Team Name</th>
          <th>Action</th>
        </tr>
        {dataRow.map((rowItem)=>(
          <tr>
          <td>1</td>
          <td>{rowItem.PlayerName}</td>
          <td>{rowItem.TeamName}</td> 
          <td></td>
        </tr>
        ))}
      </table>

    </>

  );
}


function App() {
  function addPlayer(data){
    console.log(data);
  }
  return (
    <div className="App">      
      <h1>Team Management</h1>
      <AddForm playerName={""} teamName={""} getData={addPlayer}/>
      {/* <UserList userDetail={""}/> */}
    </div>
  );
}

export default App;
