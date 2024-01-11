import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { userValidation } from './validation';


function App() {
  
  const createdata = async (e) =>{
    e.preventDefault()
    let formdata = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    }
    console.log(formdata);
    const isValid = await userValidation.isValid(formdata)
    console.log(isValid)
  }

  return (
   <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
      <div className=' bg-white rounded p-3'>
        <form onSubmit={createdata}>
          <div className='mb-3'>
          <label htmlFor=''>Name</label>
          <input 
          type='text'
          className='form-control'
          placeholder='Enter the Name'
          />
          </div>
          <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input 
          type='email'
          className='form-control'
          placeholder='Enter the Email'
          />
          </div>
          <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input 
          type='password'
          className='form-control'
          placeholder='Enter the Password'
          />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
   </div>
  )
}

export default App
