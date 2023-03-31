import React from 'react'
// import Tables from './Table'
import Forms from './Forms'

const Edit = () => {
  return (
    <div>
      {/* <Tables/> */}
      <Forms/>
    </div>
  )
}

export default Edit

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// function Edit() {

//     const [id, setId] = useState(0);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [gender, setGender] = useState('');
//     const [hobbies, setHobbies] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//       setId(localStorage.getItem('id'));
//       setName(localStorage.getItem('name'));
//       setEmail(localStorage.getItem('email'));
//       setPhone(localStorage.getItem('phone'));
//       // setCountry(localStorage.getItem('country'));
//       // setGender(localStorage.getItem('gender'));
//       // setHobbies(localStorage.getItem('hobbies'));
//     }, [])
    
//     const handleUpdate = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:3005/posts/${id}`,{
//           name: name,
//           email: email,
//           phone: phone,
//           // country: country,
//           // gender: gender,
//           // hobbies: hobbies,
                      
//         }).then(() => {
//             navigate('/');
//         }).catch((err) => {
//             console.log(err)
//         });
//     }

//   return (
//     <>
//     <div>
//         <div >
//             <div>
//                 <Link to='/'>
//                     <button >Read Data</button>
//                 </Link>
//             </div>
//             <div>
//                 <h1>Update Data</h1>
//             </div>
//             <form onSubmit={handleUpdate}>
//                 <div>
//                     <label>Enter Name: </label>
//                     <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
//                 </div>
               
//                 <div >
//                     <label>Enter Email: </label>
//                     <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
//                 </div>

//                 <div>
//                     <label>Enter Phone: </label>
//                     <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
//                 </div>
// {/* 
//                 <div>
//                     <label>Enter Country: </label>
//                     <input type='' value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' />
//                 </div> */}

//                 {/* <div>
//                     <label>Enter Gender: </label>
//                     <input type='number' value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Gender' />
//                 </div> */}

//                 {/* <div>
//                     <label>Enter Hobbies: </label>
//                     <input type='number' value={hobbies} onChange={(e) => setHobbies(e.target.value)} placeholder='Hobbies' />
//                 </div> */}
                
//                 <br />
//                 <div>
//                     <input type='submit' value='Update' />
//                 </div>
//             </form>
//         </div>
//     </div>
// </>
//   )
// }

// export default Edit
