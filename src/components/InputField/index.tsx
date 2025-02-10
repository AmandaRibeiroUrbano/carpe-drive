import { ErrorText } from "@components/ErrorText";
import { InputLabel } from "@components/InputLabel";
import { UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import { IMaskInput } from "react-imask";

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
  // error?: FieldError;
}

 const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  register,
  error,
  endAdornment,
  mask,
  type = "text",
  placeholder = "",
  showErrorMessage = true,
}) => {

  const {name:nameRef, ref, ...props } = register(name);

  return (
    <div className="relative">
      { mask ? (
       <IMaskInput
       {...props}
       mask={mask}
       inputRef={ref}
       name={nameRef}
       id={id}
       type={type}
       placeholder={placeholder}
       className={classNames(
         "input-field peer",
         error ? "input-error" : "input-default"
       )}
       autoComplete="new-password"
       onFocus={(e) => e.target.setAttribute("autocomplete", "on")}
     />
    ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={classNames(
            "input-field peer",
            error ? "input-error" : "input-default"
          )}
          autoComplete="new-password"
          onFocus={(e) => e.target.setAttribute("autocomplete", "on")}
          {...register(name)}
        />
      )}
      {endAdornment && (
        <div className="absolute inset-y-0 right-2 flex items-center">
          {endAdornment}
        </div>
      )}

      {error && showErrorMessage && (
        <ErrorText>
          {error.message}
        </ErrorText>
      )}

      <InputLabel id={id} error={!!error} label={label} />
      
    </div>
  );
};

export default InputField;
