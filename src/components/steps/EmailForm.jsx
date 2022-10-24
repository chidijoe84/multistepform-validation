
import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import {FIELDS, STEPS } from '../utills/constant';
import { FormStepContext } from '../utills/context/FormStepContext';
import { useStateFormContext } from '../utills/hooks';
import { Button, Flex, Input, InputContainer, InputError, InputField, InputLabel } from '../utills/styles'




export const EmailForm = () => {
  const {fields, setStep, updateFields} = useStateFormContext()


  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
    email: fields.email
  }
});

  





const onSubmit = (data) => {
  console.log(data);
  updateFields(FIELDS.EMAIL, data.email)
  setStep(STEPS.MOBILE);
}

const goBack = () => {
  setStep(STEPS.CONTACT);
}

const onError = (errors, error) => {}

  return (
    <div className='base-form'>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
      <InputContainer style={{margin: "10px 0"}} error={errors.email}>
    <Flex alignItem="center" justifyContent= "space-between">
      <InputLabel  htmlFor = "email" children="email"/>
      {errors.email && <InputError children={errors.email.message}/>}
    </Flex>
       <InputField type='email'  id="email"  {...register("email", {
        required: "email is required"
       })}/>
    </InputContainer>

    <Flex justifyContent="flex-end">
   <Button type='button' children="Prev" onClick={goBack} secondary style={{margin: "0 10px" }}/>
   <Button children="Next" />
   </Flex>
      </form>
    </div>
  )
}



// import { useContext } from "react";

// import { StepperContext } from "../../contexts/StepperContext";

// export default function Details() {
//   const { userData, setUserData } = useContext(StepperContext);

  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };
//   return (
//     <form >
//     <div className="flex flex-col ">
//       <div className="w-full mx-2 flex-1">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
//           Address
//         </div>
//         <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          
//           <input
//             onChange={handleChange}
//             value={userData["address"]}
//             name="address"
//             placeholder="Address"
            
//             className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//           />
         
//          </div>
        
//       </div>
//       {/* {errors.name ? <p>Please check the First Name</p> : null} */}
//       <div className="w-full mx-2 flex-1">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
//           City
//         </div>
//         <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//           <input
//             onChange={handleChange}
//             value={userData["city"]}
//             name="city"
//             placeholder="City"
//             type="text"
//             // {...register("city", { required: true, maxLength: 2})}
//             className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//           />
         
//         </div>
      
//       </div>
//       {/* {errors.city && <p>Please check the First Name</p>} */}
//     </div>
//   </form> 
//   );
// }
