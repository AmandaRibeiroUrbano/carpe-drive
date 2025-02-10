import { Control } from "react-hook-form";
import "react-phone-input-2/lib/high-res.css";
import { FormInputType } from "@pages/Register";
interface PhoneInputFieldProps {
    control: Control<FormInputType>;
    errors: Record<string, any>;
}
declare const PhoneInputField: React.FC<PhoneInputFieldProps>;
export default PhoneInputField;
