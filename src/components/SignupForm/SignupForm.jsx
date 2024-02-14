// import { useState } from 'react';
// import * as authService from '../../services/authServices';

// const SignupForm = props => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     isAgent: false, 
//     licenseNumber: '',
//     user: '',
//   });

//   const handleChange = e => {
//     const { name, value, type, checked } = e.target;
//     if (props.setMessage) {
//       props.setMessage('');
//     }
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : (name === 'email' ? value.toLowerCase() : value)
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const submissionData = {
//       ...formData,
//       email: formData.email.toLowerCase(),
//     };
    
//     try {
//       if (formData.isAgent) {
//         await authService.signupAgent(submissionData);
//       } else {
//         await authService.signup(submissionData);
//       }
//       props.handleSignupOrLogin();
//     } catch (err) {
//       props.setMessage(err.message);
//     }
//   };

//   const { user, email, password, isAgent, licenseNumber, phone } = formData;

//   const isFormInvalid = () => {
//     if (isAgent) {
//       return !(user && email && password && licenseNumber);
//     } else {
//       return !(user && email && password);
//     }
//   };

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit} className='SignupForm'>
//       <div className='inputContainer'>
//         <input
//           type="text"
//           name="username"
//           autoComplete='off'
//           value={formData.user || ''}
//           onChange={handleChange}
//           placeholder="Username"
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
//           placeholder="Email"
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
//           placeholder="Password"
//           id='password'
//         />
//       </div>
//       {/* Toggle for agent signup */}
//       <div className='inputContainer'>
//         <label>
//           <input
//             type="checkbox"
//             name="isAgent"
//             checked={formData.isAgent}
//             onChange={handleChange}
//           /> Sign up as an agent
//         </label>
//       </div>
      
//       {formData.isAgent && (
//         <div className='inputContainer'>
//           <input
//             type="text"
//             name="licenseNumber"
//             value={formData.licenseNumber}
//             onChange={handleChange}
//             placeholder="License Number"
//           />
//         </div>
//       )}
//       <div className='signupbutton'>
//         <button disabled={isFormInvalid()}>
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
    name: '',
    email: '',
    phone: '',
    password: '',
    isAgent: false,
    licenseNumber: '',
    user: '',
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
        const agentData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          license: formData.licenseNumber, // Adjusting based on your description
          user: formData.user,
        };
        await authService.signupAgent(agentData);
      } else {
        const userData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          user: formData.user,
        };
        await authService.signup(userData);
      }
      props.handleSignupOrLogin();
    } catch (err) {
      props.setMessage(err.message);
    }
  };

  const { name, email, phone, password, isAgent, licenseNumber, user } = formData;

  const isFormInvalid = () => {
    if (isAgent) {
      return !(name && email && phone && password && licenseNumber && user);
    } else {
      return !(name && email && phone && password);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className='SignupForm'>
      <div className='inputContainer'>
        <input
          type="text"
          name="name"
          autoComplete='off'
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="Name"
          id='name'
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
          type="text"
          name="phone"
          autoComplete='off'
          value={formData.phone || ''}
          onChange={handleChange}
          placeholder="Phone"
          id='phone'
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
      <div className='inputContainer'>
        <input
          type="user"
          name="user"
          autoComplete='off'
          value={formData.user}
          onChange={handleChange}
          placeholder="Username"
          id='user'
        />
      </div>
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
            id='licenseNumber'
          /> {/* This is where the missing closing tags were added */}
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
