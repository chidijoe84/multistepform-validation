import { createContext } from "react";
import { defaultFields } from "../constant";

export const FormFieldsContext = createContext({
    fields : defaultFields,
    updateFields: () => {}
})