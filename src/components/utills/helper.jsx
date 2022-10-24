import React from 'react'
import { ContactForm } from '../steps/ContactForm'
import { EmailForm } from '../steps/EmailForm'
import { MobileForm } from '../steps/MobileForm'
import {ReviewFormDetails} from '../steps/ReviewFormDetails'
import {ErrorStep} from '../steps/ErrorStep'
import { SuccessStep} from '../steps/SuccessStep'
import { STEPS } from './constant'

export const getCurrentForm = (step) => {
 switch (step){
    case STEPS.CONTACT:
        return <ContactForm />;

        case STEPS.EMAIL:
            return <EmailForm />;

            case STEPS.MOBILE:
                return <MobileForm />;

                case STEPS.REVIEW:
                    return <ReviewFormDetails />;

                    case STEPS.ERROR:
                        return <ErrorStep />;

                        case STEPS.SUCCESS:
                            return <SuccessStep />;

                            default :
                            return null
 }
}
