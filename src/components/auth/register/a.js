// import React from "react";
// import {ErrorMessage} from 'formik';
// import './register.css';



// //form-UI component

// function ContactForm(props) {

//         const {
//           values,
//           touched,
//           errors,
//           status,
//           dirty,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           handleReset,
//         } = props;

//  return (
//           <div className="app">
//             <h2>Sign up</h2>
//       <Form onSubmit={handleSubmit}>
//             <InputComponent 
//                 label="FirstName"
//                 id="firstName" 
//                 placeholder="Enter Your First Name"
//                 type="text" 
//                 value={values.firstName} 
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={
//                   errors.name && touched.name ? 'text-input error' : 'text-input'
//                 }
//                 changing={errors.firstName && touched.firstName ? errors.firstName : ''}
//                 validateStatus={errors.firstName && touched.firstName ? "error" : 'success'}
//             />

//             <InputComponent 
//               label="LastName"
//               id="lastName" 
//               placeholder="Enter Your Last Name"
//               type="text" 
//               value={values.lastName} 
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
//               }
//             />
//             <InputComponent 
//                   label="Email"
//                   id="email"
//                   placeholder="Enter your Email"
//                   type="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.email && touched.email ? 'text-input error' : 'text-input'
//                   }      
//                />
//              <InputComponent
//                   label="Password"
//                   id="password"
//                   placeholder="Enter your password"
//                   type="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.password && touched.password ? 'text-input error' : 'text-input'
//                   }
//               />  
//             <Form/>
             

//               <Form.Item>
//                 <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
//                 Submit
//                 </Button>
//              </Form.Item>

//   {
//   status && <p className="form_area"> {status}
//     <span 
//       onClick={()=>dispatch({type:"clearError"})} 
//       className="form_close">close
//     </span>
//   </p> 
//   }
                          
//     </Form>
    
//  <span className="login_btn" >Already have Account? Please <a href="/login">Login</a>
//  </span> 
//           </div>
//         );
//       }


// export default ContactForm;