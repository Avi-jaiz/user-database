import axios from 'axios'
import './adduser.css'
import { useState } from 'react'
function AddUser({details}) {
const [addData,setAddData] =useState(
    {
        first_name:"",
        last_name:"",
        email:"",
        avatar:"",
    }
)
const handleAdd =(event)=>
{
    event.preventDefault();
  const fieldName = event.target.getAttribute('name')
const fieldValue =  event.target.value;

const newFormData = {...addData};
newFormData[fieldName] = fieldValue;

setAddData(newFormData)

}

const handleAddFormSubmit =async(event)=>
{
event.preventDefault();

const newUser = 
{
    id:Math.floor(Math.random()*10000),
    first_name:addData.first_name,
last_name:addData.last_name,
email:addData.email,
avatar:addData.avatar,
}

const newUsers =[...details,newUser];
setAddData(newUsers)


const url = "https://reqres.in/api/users"
const response = await axios.post(url,newUsers);


setAddData(response)



}





  return (
    <div className='AddUser'>
        <form className='form'>
            <label   >First Name</label>
            <input type ='text' name="first_name" onChange={handleAdd}/>
              <br />
            <label  >Last Name</label>
            <input type ='text' name="last_name" onChange={handleAdd} />
            <br />
            <label name="email" >Email</label>
            <input type ='email' name="last_name" onChange={handleAdd} />
            <br />
            <label name="avatar" >Avatar</label>
            <input type ='text' name="avatar" onChange={handleAdd} />

            <button type='submit'  onClick={handleAddFormSubmit} >submit</button>
        </form>

    </div>
  )
}

export default AddUser