import React,{useState} from 'react';
import './App.css';

function AddForm(props){
  const[pName, setPName] = useState(props.playerName);
  const[tName, setTName] = useState(props.teamName);
  let pd={};
  function onChangeName(a){
    setPName(a.target.value);
  }
  function onChangeTeam(a){
    setTName(a.target.value);
  }
  function createPlayer(){
    pd = {"PlayerName":pName, "TeamName":tName}
    //props.getData(pd);
    console.log("vel-test " + pd.PlayerName)
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
      
      <table border={"1"} width={"100%"} style={{marginTop:"50px"}}>
        <tr>
          <td>S No</td>
          <td>Player Name</td>
          <td>Team Name</td>
          <td>Action</td>
        </tr>
        <tr>
          <td>1</td>
          <td>{pd.PlayerName}</td>
          <td>{pd.TeamName}</td> 
          <td></td>
        </tr>
      </table>

    </>

  );
}

// function UserList(){
//   return(
//     <>
//       <table border={"1"} width={"100%"} style={{marginTop:"50px"}}>
//         <tr>
//           <td>S No</td>
//           <td>Player Name</td>
//           <td>Team Name</td>
//           <td>Action</td>
//         </tr>
//         <tr>
//           <td>{}</td>
//         </tr>
//       </table>
//     </>
//   )
// }

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
