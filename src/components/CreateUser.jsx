import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import userSevice from '../service/user.sevice';
import { useNavigate, Link, useParams } from 'react-router-dom';


export default function CreateUser() {
  const {id} = useParams();
  const [valueUser,setValueUser] = useState({
    user_id:'',
    user_name:'',
    user_email:'',
    user_phone:''
  }) 
  
  const navigate = useNavigate();
  const onChangeUser  = (e) =>{
      setValueUser({
        ...valueUser,
        [e.target.name]:e.target.value
      })
  }

  const saveUser =(e)=>{
    e.preventDefault();
    if(id){
      if(valueUser){
        userSevice.updated(id,valueUser)
        .then(res =>{
          navigate('/')
          console.log("User updated completed", res.data);
        })
        .catch(err =>{
          console.log("User updated Error", err);
        })
      }
    } else{
        userSevice.create(valueUser)
      .then(res =>{
        navigate('/');
        console.log("Add user completed", res.data)
      })
      .catch(err =>{
        navigate('/about');
        console.log("user error", err);
      })
    }
  }

  useEffect(() =>{
    if(id){
      userSevice.getUser(id)
      .then(valueUser =>{
        setValueUser({
          user_name:valueUser.data.user_name,
          user_email:valueUser.data.user_email,
          user_phone:valueUser.data.user_phone
        })
      })
      .catch(err =>{
        console.log('something went wrong!', err);
      }) 
    }
  },[id])
  return (
    <div className='container'>
    
      <h3>Add new User</h3>
      <hr/>
        <form >
          <div className='form-group'>
            <input type="text" className='form-control col-4' name='user_name' id='name' value={valueUser.user_name} onChange={onChangeUser}  placeholder="Enter Your Name"/>
          </div>

          <div className='form-group'>
            <input type="text" className='form-control col-4' name='user_email' id='mail'  value={valueUser.user_email} onChange={onChangeUser} placeholder="Enter Your Email"/>
          </div>

          <div className='form-group'>
            <input type="text" className='form-control col-4' name="user_phone" id='phone' value={valueUser.user_phone} onChange={onChangeUser}  placeholder="Enter Your Phone"/>
          </div>
          <button className="btn btn-outline-primary" onClick={saveUser}>Save</button>
      </form>
      <hr />
      <Link to="/">View List</Link>
    </div>
  )
}
