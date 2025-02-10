import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Eye, EyeOff, CheckCircle, Circle } from "lucide-react";
import InputField from "@components/InputField";
import classNames from "classnames";
const PasswordField = ({ id, name, label, register, error, showRules = false, showErrorMessage = true }) => {
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
    return (_jsxs("div", { children: [_jsx(InputField, { id: id, name: name, label: label, type: showPassword ? "text" : "password", register: register, error: error, showErrorMessage: showErrorMessage, endAdornment: _jsx("button", { type: "button", onClick: () => setShowPassword((prev) => !prev), className: "p-2", children: showPassword ? (_jsx(Eye, { className: "w-5 h-5 text-gray-700 dark:text-gray-300" })) : (_jsx(EyeOff, { className: "w-5 h-5 text-gray-700 dark:text-gray-300" })) }) }), showRules && (_jsxs("ul", { className: "mt-2 space-y-1 text-sm px-2 text-gray-500 dark:text-gray-400", children: [_jsx("p", { children: " A senha deve conter pelo menos:" }), _jsxs("li", { className: "flex items-center gap-2", children: [passwordRules.minLength ? (_jsx(CheckCircle, { className: "text-green-500 w-4 h-4" })) : (_jsx(Circle, { className: " w-4 h-4" })), "M\u00EDnimo de 8 caracteres"] }), _jsxs("li", { className: classNames("flex items-center gap-2"), children: [passwordRules.hasNumber ? (_jsx(CheckCircle, { className: "text-green-500 w-4 h-4" })) : (_jsx(Circle, { className: " w-4 h-4" })), "Pelo menos um n\u00FAmero"] }), _jsxs("li", { className: "flex items-center gap-2", children: [passwordRules.hasLetter ? (_jsx(CheckCircle, { className: "text-green-500 w-4 h-4" })) : (_jsx(Circle, { className: " w-4 h-4" })), "Pelo menos uma letra"] })] }))] }));
};
export default PasswordField;
