// import { useState } from 'react';
// import * as authService from '../../services/authServices'



// const SignupForm = props => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = e => {
//     if (props.setMessage) {
//       props.setMessage('');
//     }
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'email' ? value.toLowerCase() : value
//     });
//   };



//   const handleSubmit = async e => {
//     e.preventDefault();
//     const submissionData = {
//       ...formData,
//       email: formData.email.toLowerCase(),
//     };

//     try {
//       await authService.signup(submissionData);
//       props.handleSignupOrLogin();
//     } catch (err) {
//       props.setMessage(err.message);
//     }
//   }


//   const { username, email, password } = formData

//   const isFormInvalid = () => {
//     return !(username && email && password)
//   }

//   return (
//     <form
//       autoComplete="off"
//       onSubmit={handleSubmit}
//       className='SignupForm'
//     >
//       <div className='inputContainer'>
//         <input
//           type="text"
//           name="username"
//           autoComplete='off'
//           value={formData.username || ''}
//           onChange={handleChange}
//           placeholder="username"
//           id='username'
//         />
//       </div>
//       <div className='inputContainer'>
//         <input
//           type="text"
//           name="email"
//           autoComplete='off'
//           value={formData.email || ''}
//           onChange={handleChange}
//           placeholder="email"
//           id='email'
//         />
//       </div>
//       <div className='inputContainer'>
//         <input
//           type="password"
//           name="password"
//           autoComplete='off'
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="password"
//           id='password'
//         />
//       </div>
//       <div className='signupbutton'>
//         <button>
//           Sign Up
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SignupForm;
import { useState } from 'react';
import * as authService from '../../services/authServices';

const SignupForm = props => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isAgent: false, 
    licenseNumber: '',
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (props.setMessage) {
      props.setMessage('');
    }
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : (name === 'email' ? value.toLowerCase() : value)
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      email: formData.email.toLowerCase(),
    };
    
    try {
      if (formData.isAgent) {
        await authService.signupAgent(submissionData);
      } else {
        await authService.signup(submissionData);
      }
      props.handleSignupOrLogin();
    } catch (err) {
      props.setMessage(err.message);
    }
  };

  const { username, email, password, isAgent, licenseNumber } = formData;

  const isFormInvalid = () => {
    if (isAgent) {
      return !(username && email && password && licenseNumber);
    } else {
      return !(username && email && password);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className='SignupForm'>
      <div className='inputContainer'>
        <input
          type="text"
          name="username"
          autoComplete='off'
          value={formData.username || ''}
          onChange={handleChange}
          placeholder="Username"
          id='username'
        />
      </div>
      <div className='inputContainer'>
        <input
          type="text"
          name="email"
          autoComplete='off'
          value={formData.email || ''}
          onChange={handleChange}
          placeholder="Email"
          id='email'
        />
      </div>
      <div className='inputContainer'>
        <input
          type="password"
          name="password"
          autoComplete='off'
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          id='password'
        />
      </div>
      {/* Toggle for agent signup */}
      <div className='inputContainer'>
        <label>
          <input
            type="checkbox"
            name="isAgent"
            checked={formData.isAgent}
            onChange={handleChange}
          /> Sign up as an agent
        </label>
      </div>
      
      {formData.isAgent && (
        <div className='inputContainer'>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            placeholder="License Number"
          />
        </div>
      )}
      <div className='signupbutton'>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
