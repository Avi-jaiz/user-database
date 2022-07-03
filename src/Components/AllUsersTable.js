import axios from 'axios';
import React, { useState } from 'react';
import './alluserstable.css';

function AllUsersTable({details}) {




  return (
    


    <div className='table-main'>
<table >
<tr className='table-row'>
  <th>Serial No.</th>
  <th>Avatar</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Email id</th>
  <th>Action</th>
</tr>

{details.map((items,index)=>
(
          
<tr key={index+1} className='t-row'>
    
    <td className='td'>{index+1}</td>
    <td ><img src= {items.avatar} className='avatar'/></td>
    <td className='td'>{items.first_name}</td>
    <td className='td'>{items.last_name}</td>
  <td className='td'>{items.email}</td>
    <td><button className='edit' >Edit</button> <button className='delete'>Delete</button></td>
  </tr>


))}

  
</table>

</div>

    
  )
}
export default AllUsersTable;