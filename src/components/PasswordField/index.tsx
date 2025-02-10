import { useEffect, useState } from "react";
import { Eye, EyeOff, CheckCircle, Circle } from "lucide-react";
import InputField, { InputFieldProps } from "@components/InputField";
import classNames from "classnames";

interface PasswordFieldProps extends InputFieldProps {
  showRules?: boolean;
}

const PasswordField = ({
  id,
  name,
  label,
  register,
  error,
  showRules = false,
  showErrorMessage = true
}: PasswordFieldProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    hasNumber: false,
    hasLetter: false,
  });

  useEffect(() => {
    setPasswordRules({
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasLetter: /[A-Za-z]/.test(password),
    });
  }, [password]);

  register(name, {
    onChange: (e) => setPassword(e.target.value),
  });

  return (
    <div>
      <InputField
        id={id}
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        register={register}
        error={error}
        showErrorMessage={showErrorMessage}
        endAdornment={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="p-2"
          >
            {showPassword ? (
              <Eye className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <EyeOff className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        }
      />
      {showRules && (
        <ul className="mt-2 space-y-1 text-sm px-2 text-gray-500 dark:text-gray-400">
          <p> A senha deve conter pelo menos:</p>
          <li className="flex items-center gap-2">
            {passwordRules.minLength ? (
              <CheckCircle className="text-green-500 w-4 h-4" />
            ) : (
              <Circle className=" w-4 h-4" />
            )}
            Mínimo de 8 caracteres
          </li>
          <li className={classNames("flex items-center gap-2")}>
            {passwordRules.hasNumber ? (
              <CheckCircle className="text-green-500 w-4 h-4" />
            ) : (
              <Circle className=" w-4 h-4" />
            )}
            Pelo menos um número
          </li>
          <li className="flex items-center gap-2">
            {passwordRules.hasLetter ? (
              <CheckCircle className="text-green-500 w-4 h-4" />
            ) : (
              <Circle className=" w-4 h-4" />
            )}
            Pelo menos uma letra
          </li>
        </ul>
      )}
    </div>
  );
};

export default PasswordField;
