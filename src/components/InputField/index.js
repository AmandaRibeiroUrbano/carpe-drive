import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorText } from "@components/ErrorText";
import { InputLabel } from "@components/InputLabel";
import classNames from "classnames";
import { IMaskInput } from "react-imask";
const InputField = ({ id, name, label, register, error, endAdornment, mask, type = "text", placeholder = "", showErrorMessage = true, }) => {
    const { name: nameRef, ref, ...props } = register(name);
    return (_jsxs("div", { className: "relative", children: [mask ? (_jsx(IMaskInput, { ...props, mask: mask, inputRef: ref, name: nameRef, id: id, type: type, placeholder: placeholder, className: classNames("input-field peer", error ? "input-error" : "input-default"), autoComplete: "new-password", onFocus: (e) => e.target.setAttribute("autocomplete", "on") })) : (_jsx("input", { id: id, type: type, placeholder: placeholder, className: classNames("input-field peer", error ? "input-error" : "input-default"), autoComplete: "new-password", onFocus: (e) => e.target.setAttribute("autocomplete", "on"), ...register(name) })), endAdornment && (_jsx("div", { className: "absolute inset-y-0 right-2 flex items-center", children: endAdornment })), error && showErrorMessage && (_jsx(ErrorText, { children: error.message })), _jsx(InputLabel, { id: id, error: !!error, label: label })] }));
};
export default InputField;
