import { UseFormRegister } from "react-hook-form";
export interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    error?: Record<string, any>;
    endAdornment?: React.ReactNode;
    mask?: string;
    showErrorMessage?: boolean;
}
declare const InputField: React.FC<InputFieldProps>;
export default InputField;
