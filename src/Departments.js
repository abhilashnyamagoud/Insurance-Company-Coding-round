import React,{useState} from 'react'
import axios from 'axios'
import Modal from './Modal'
const Departments=(props)=>{
const[users,setUsers]=useState({})
const [department,setDepartment]=useState('')
const[employeeId,SetEmployeeId]=useState('')
const[toggle,setToggle]=useState(false)
const hr=[1,2,3,4,5]
const engg=[6,7,8,9,10]

const handleChange=(e)=>{
    setDepartment(e.target.value)
    // console.log(e.target.value)
}
const handleClear=()=>{
    setUsers({})
    setToggle(false)
//    console.log(users)
}
const handleIdChange=(e)=>{
    SetEmployeeId(e.target.value)
    // console.log(e.target.value)  
}
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.get(`https://reqres.in/api/users/${employeeId}`)
  .then((responce)=>{
    const result=responce.data
    // console.log(result)
    setUsers(result)
    setToggle(true)  
    setDepartment('')
    SetEmployeeId('')
  })
}
    return(
        <div className='form-group row mt-3'>
            <form onSubmit={handleSubmit}>
            <label className='h3 mr-3'>Departments:</label>
            <select className="form-control-lg mr-3" value={department} onChange={handleChange}>
                <option value=''>select</option>
                <option value='hr'>HR</option>
                <option value='engineering'>Engineering</option>
            </select>
            
            <label className='h3 mr-3'> Employee ID:</label>
                {
                    department ==='hr' ? 
                    <select  className="form-control-lg mr-3" value={employeeId} onChange={handleIdChange}>
                    <option value=''>Select</option>                 
                    {   
                        hr.map((ele,i)=>{
                            return <option key={i} value={ele}>{ele} </option>
                        })
                    }
                     </select>: department==='engineering' ?
                     <select className="form-control-lg mr-3" value={employeeId} onChange={handleIdChange}>
                     <option value=''>Select</option>                 
                     {   
                         engg.map((ele,i)=>{
                             return <option key={i} value={ele}>{ele} </option>
                         })
                     }
                      </select>:
                      <select className="form-control-lg mr-3">
                          <option>select</option>
                      </select>
                }
            <input className='mr-3 btn btn-primary' type='submit' value='GetDetails'/>
            <input type='button' className='btn btn-primary'  onClick={handleClear} value='Clear'/>
            </form>
                {
                    toggle && <Modal users={users} />
                }           
        </div>
    )
}

export default Departments