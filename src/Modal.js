import React from 'react'
const Modal=(props)=>{
const{users}=props
// console.log(users.data)
    return(
        <div className='container mt-5' style={{width:'600px'}}>
            <div className='card'>
            <img src={users.data.avatar} alt='image' width='30%' />
            <div className='card-body'> 
            <h3 className="card-header">ID: {users.data.id}</h3>
              <h3 className='card-header'>Name:{users.data.first_name} {users.data.last_name} </h3>
            </div>
            </div>
        </div>
    )
}
export default Modal