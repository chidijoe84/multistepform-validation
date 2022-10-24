
import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { STEPS } from '../utills/constant';
import { FormStepContext } from '../utills/context/FormStepContext';
import { useStateFormContext } from '../utills/hooks';
import { Button, Flex,  Input, InputContainer, InputError, InputField, InputFieldDetails, InputLabel } from '../utills/styles'





export const ReviewFormDetails = () => {

  const {setStep, fields} = useStateFormContext()
  

  const goBack = () => {
    setStep(STEPS.MOBILE);
  }

   const onSubmit = () => {
    // Call some API...
    try {
      
    } catch (err) {

    }
  };
  return (
    <div className="base-form">
    <InputContainer style={{ margin: '10px 0' }}>
      <Flex alignItems="center" justifyContent="space-between">
        <InputLabel children="First Name" />
      </Flex>
      <InputFieldDetails>{fields.contact.firstName}</InputFieldDetails>
    </InputContainer>
    <InputContainer style={{ margin: '10px 0' }}>
      <Flex alignItems="center" justifyContent="space-between">
        <InputLabel children="Last Name" />
      </Flex>
      <InputFieldDetails>{fields.contact.lastName}</InputFieldDetails>
    </InputContainer>
    <InputContainer style={{ margin: '10px 0' }}>
      <Flex alignItems="center" justifyContent="space-between">
        <InputLabel children="Email Address" />
      </Flex>
      <InputFieldDetails>{fields.email}</InputFieldDetails>
    </InputContainer>
    <InputContainer style={{ margin: '10px 0' }}>
      <Flex alignItems="center" justifyContent="space-between">
        <InputLabel children="Mobile Number" />
      </Flex>
      <InputFieldDetails>{fields.mobile}</InputFieldDetails>
    </InputContainer>
    <Flex justifyContent="flex-end">
      <Button
        type="button"
        children="Back"
        secondary
        style={{ margin: '0 10px' }}
        onClick={goBack}
      />
      <Button children="Next" onClick={onSubmit} />
    </Flex>
  </div>
);
}



// import React, {useEffect, useState, useRef} from 'react'


// const Stepper = ({steps, currentStep}) => {
// const [newStep, setNewstep] = useState([])
// const stepRef = useRef();

// const updateStep = (stepNumber, steps) => {
// const newSteps = [...steps]
// let count = 0;

// while(count < newSteps.length){
//     //currentstep
//     if(count === stepNumber){
//         newSteps[count] = {
//             ...newSteps[count],
//             highlighted:true,
//             selected: true,
//             completed: true
//         };
//         count++;
//     }
//     //count completed
//     else if (count < stepNumber){
//         newSteps[count] = {
//             ...newSteps[count],
//             highlighted : false,
//             selected: true,
//             completed: true
//         };
//         count++;
//     }
//     //step pending
//     else{
//         newSteps[count] = {
//             ...newSteps[count],
//             highlighted:false,
//             selected: false,
//             completed: false
//         };
//         count++;
//     }
// }

// return newSteps;
// }
//    useEffect(()=>{
//     //create object

//     const stepState = steps.map((step, index)=> 
//     Object.assign( 
//         {}, 
//         {
//             description: step,
//             completed: false,
//             highlighted: index === 0 ? true: false,
//             selected: index === 0 ? true : false

//         }
//         )
//     );

//     stepRef.current = stepState;
//     const current = updateStep(currentStep - 1, stepRef.current)
//     setNewstep(current)

//    }, [steps, currentStep]) 

//     const displaySteps = newStep.map((step, index)=> {
//         return(
            
//                 <div key={index} className=
//                 {
//                     index !== newStep.length -1 ? 
//                     'w-full flex items-center' : 
//                     'flex items-center'}>
//                      <div className='relative flex flex-col items-center text-teal-600'>
//                     <div className={`rounded-full transition duration-500 ease-in-out
//                     border-2 border-gray-300 h-12 w-12 flex items-center justify-center
//                     py-3 ${step.selected ? "bg-green-600 text-white font-bold border border-green-600" : ""}`}>
//                          {/* display number */}
//                          {step.completed ? (
//                             <span className='text-white font-bold text-xl'>&#10003;</span>
//                          ) : (
//                             index + 1
//                          )}
//                     </div>
//                     <div className={`absolute top-0 text-center mt-16 w-32 
//                     text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
//                         {/* display description */}
//                         {step.description}
                        
//                     </div> 
//                    </div>
                    
//                     <div className={`flex-auto border-t-2 transition duration-500 
//                     ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}>
//                      {/* display line */}
//                    </div>
//                 </div>
            
//         )
//     }) 

//   return (
//     <div className='mx-4 p-4 flex justify-between items-center'>
//       {displaySteps}
//     </div>
//   )
// }

// export default Stepper