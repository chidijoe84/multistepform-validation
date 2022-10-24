import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { FIELDS, STEPS } from '../utills/constant';
import { FormStepContext } from '../utills/context/FormStepContext';
import { useStateFormContext } from '../utills/hooks';
import { Button, Flex, Input, InputContainer, InputError, InputField, InputLabel } from '../utills/styles'




export const ContactForm = () => {
  const {fields, setStep, updateFields} = useStateFormContext()

const {register, handleSubmit, formState: {errors}} = useForm({
  defaultValues: {
    ...fields.contact
  }
});



const onSubmit = (data) => {
  console.log(data);
  updateFields(FIELDS.CONTACT, data)
  setStep(STEPS.EMAIL);
 
}

const onError = (errors, error) => {}
  return (
   <div className='base-form'>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
    <InputContainer style={{margin: "10px 0"}} error={errors.firstName}>
    <Flex alignItem="center" justifyContent= "space-between">
      <InputLabel  htmlFor = "firstName" children="firstName"/>
      {errors.firstName && <InputError children={errors.firstName.message}/>}
    </Flex>
       <InputField  id="firstName"  {...register("firstName", {
        required: "first name required"
       })}/>
    </InputContainer>


    <InputContainer style={{margin: "10px 0"}} error={errors.lastName}>
    <Flex alignItem="center" justifyContent= "space-between">
      <InputLabel  htmlFor = "lastName" children="lastName"/>
      {errors.lastName && <InputError children={errors.lastName.message}/>}
    </Flex>
       <InputField  id="lastName" {...register("lastName", {
        required: "last name required"
       })} />
    </InputContainer>
    

   <Flex justifyContent="flex-end">
   <Button children="Next" />
   </Flex>
   </form>
   </div>
  )
}


// import React, {useContext} from 'react';
// import { StepperContext } from '../../contexts/StepperContext';

// export default function Account() {
//   const {userData, setUserData} = useContext(StepperContext);
//   const handleChange = (e) => {
//     const {name, value } = e.target;
//     setUserData({...userData, [name]: value})
//   };
//   return (
//     <div className="flex flex-col ">
//       <div className="mx-2 w-full flex-1">
//         <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
//           Username
//         </div>
//         <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
//           <input
//             onChange={handleChange}
//             value={userData["username"] }
//             name="username"
//             placeholder="Username"
//             className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
//           />
//         </div>
//       </div>
//       <div className="mx-2 w-full flex-1">
//         <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
//           Password
//         </div>
//         <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
//           <input
//           required 
//             onChange={handleChange}
//             value={userData["password"]}
//             name="password"
//             placeholder="Password"
//             type="password"
//             className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
