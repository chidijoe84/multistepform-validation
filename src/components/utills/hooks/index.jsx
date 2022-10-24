import {useContext} from 'react'
import { FormFieldsContext } from '../context/FormFieldsContext'
import { FormStepContext } from '../context/FormStepContext'

export const useStateFormContext = () => ({
    ...useContext(FormStepContext),
    ...useContext(FormFieldsContext)

}) 