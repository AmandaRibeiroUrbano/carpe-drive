import { InputFieldProps } from "@components/InputField";
interface PasswordFieldProps extends InputFieldProps {
    showRules?: boolean;
}
declare const PasswordField: ({ id, name, label, register, error, showRules, showErrorMessage }: PasswordFieldProps) => import("react/jsx-runtime").JSX.Element;
export default PasswordField;
