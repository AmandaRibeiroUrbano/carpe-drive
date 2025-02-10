import { FieldError, UseFormRegister } from "react-hook-form";
export interface InputFieldProps {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    register?: UseFormRegister<any>;
    validationRules?: object;
    error?: FieldError;
}
export declare const Input: React.FC<InputFieldProps>;
