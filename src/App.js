import { useEffect, useState } from 'react';
import './app.css';
import axios from 'axios'
import AllUsersTable from './Components/AllUsersTable';
import {AiOutlineUserAdd} from 'react-icons/ai'
import AddUser from './Components/AddUser';


function App() {


const [details,setDetails]=useState([]);
const[modal,setModal] =useState(false);






const url1 = 'https://reqres.in/api/users?page=2';



const getData = async() =>
{
    const {data} = await axios.get(url1)
    setDetails(data['data'])
}


useEffect(()=>
{
  getData()

},[])

const showModal =()=>
{
   setModal(!modal)
}


  return (
    <div className="App">


<div className='header'>
<h3 >Database of Users </h3>

<h3 className='addNew'><AiOutlineUserAdd  className='add' onClick={showModal}/> New</h3> 



</div >
{modal ? <AddUser details={details}/> : <AllUsersTable  details={details} className='AllTableUsers'/>}
  


      
    </div>
  );
}

export default App;
