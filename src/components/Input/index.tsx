import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

export interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  validationRules?: object;
  error?: FieldError;
}

export const Input: React.FC<InputFieldProps> = ({
  name,
  type,
  label,
  placeholder,
  error,
}) => {
  return (
    <div className="w-full max-w-[20rem]">
      <TextField
        id={name}
        variant="outlined"
        type={type}
        label={label}
        placeholder={placeholder}
        error={!!error}
        helperText={error?.message}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            padding: "0.5rem",
            height: "2.75rem",
            backgroundColor: "transparent",
            "& fieldset": {
              borderColor: "#D1D5DB",
            },
            "&:hover fieldset": {
              borderColor: "#D4AF37",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D4AF37",
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "0.9rem",
            top: "-9%",
            color: "#6B7280",
            transition: "all 0.3s ease-in-out",
          },
          "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled":
            {
              top: "-0.5rem",
              left: "12px",
              transform: "scale(0.80)",
            },
          "& .css-113d811-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: "#D4AF37",
          },
          "& .MuiFormHelperText-root": {
            fontSize: "0.75rem",
            marginLeft: "0.5rem",
          },
        }}
        className={clsx("dark:text-white", {
          "border-red-600": error,
          "border-gray-300 focus:border-accent": !error,
        })}
      />
    </div>
  );
};
