
import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { FIELDS, STEPS } from '../utills/constant';
import { FormStepContext } from '../utills/context/FormStepContext';
import { useStateFormContext } from '../utills/hooks';
import { Button, Flex, Input, InputContainer, InputError, InputField, InputLabel } from '../utills/styles'




export const MobileForm = () => {

  const {fields, setStep, updateFields} = useStateFormContext();


  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues:{
      mobile: fields.mobile
    }
  });



const onSubmit = (data) => {
  console.log(data);
  updateFields(FIELDS.MOBILE, data.mobile)
  setStep(STEPS.REVIEW)
}

const goBack = () => {
  setStep(STEPS.EMAIL);
}

const onError = (errors, error) => {}

  return (
    <div className='base-form'>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
      <InputContainer style={{margin: "10px 0"}} error={errors.mobile}>
    <Flex alignItem="center" justifyContent= "space-between">
      <InputLabel  htmlFor = "mobile" children="mobile"/>
      {errors.mobile && <InputError children={errors.mobile.message}/>}
    </Flex>
       <InputField id="mobile"
        maxLength={11}
       {...register("mobile", {
        required: "mobile is required", 
       
        pattern:{
          message: 'invalide mobile number',
          value: /^\d{11}$/,
        }
       })}/>
    </InputContainer>

    <Flex justifyContent="flex-end">
   <Button type='button' children="Prev"
    onClick={goBack} secondary 
    style={{margin: "0 10px" }}/>
   <Button children="Next" />
   </Flex>
      </form>
    </div>
  )
}



// import { StepperContext } from "../../contexts/StepperContext";
// import { useContext } from "react";

// export default function Payment() {
//   const { userData, setUserData } = useContext(StepperContext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };
//   return (
//     <div className="flex flex-col ">
//       <div className="w-full mx-2 flex-1">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
//           Credit Card
//         </div>
//         <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//           <input
//             onChange={handleChange}
//             value={userData["card"]}
//             name="card"
//             placeholder="Credit Card#"
//             className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//           />
//         </div>
//       </div>
//       <div className="w-full mx-2 flex-1">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
//           Exp
//         </div>
//         <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//           <input
//             onChange={handleChange}
//             value={userData["exp"]}
//             name="exp"
//             placeholder="YY/MM/DD"
//             type="text"
//             className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
