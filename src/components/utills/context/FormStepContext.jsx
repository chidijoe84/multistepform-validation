import React, { createContext } from 'react';
import { STEPS } from '../constant'

export const FormStepContext = createContext({
    step: STEPS.CONTACT,
    setStep: () => {}
});
