import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import classNames from "classnames";
import { ErrorText } from "@components/ErrorText";
const PhoneInputField = ({ control, errors, }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const phoneRef = useRef(null);
    useEffect(() => {
        if (errors.telephone && phoneRef.current) {
            const input = phoneRef.current.querySelector("input");
            if (input)
                input.focus();
        }
    }, [errors.telephone]);
    return (_jsx(Controller, { name: "telephone", control: control, render: ({ field: { value, onChange, onBlur, name } }) => (_jsxs("div", { className: "relative", children: [_jsx(PhoneInput, { country: "br", preferredCountries: ["br"], masks: { br: ".. .....-...." }, value: value, onChange: (phone) => {
                        onChange(phone);
                        setHasValue(!!phone);
                    }, onBlur: () => {
                        onBlur();
                        setIsFocused(false);
                    }, inputProps: {
                        name,
                        id: name,
                        ref: (el) => (phoneRef.current = el),
                        autoComplete: "on",
                        placeholder: "",
                        className: classNames("block w-full px-4 pl-14 py-3 text-sm text-gray-900 font-inter bg-transparent rounded-lg border focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white max-h-11", {
                            "input-error": errors.telephone,
                            "input-default": !errors.telephone,
                        }),
                        onFocus: () => setIsFocused(true),
                        onBlur: (e) => {
                            setIsFocused(false);
                            setHasValue(!!e.target.value);
                            onBlur();
                        },
                    }, buttonClass: classNames("!bg-white dark:!bg-gray-900 border border-solid border-gray-300 dark:border-gray-600 !text-gray-900 dark:!text-gray-400", {
                        "!border-red-600 focus:!border-red-600 dark:!border-red-400 dark:!text-red-400": errors.telephone,
                        "!border-[#D4AF37] dark:!border-[#D4AF37] focus:!border-[#D4AF37]": isFocused
                    }), dropdownClass: "!bg-white dark:!bg-gray-800 !border-gray-300 dark:!border-gray-600 !text-gray-900 dark:!text-white" }), _jsx("label", { htmlFor: "telephone", className: classNames("input-label z-10", {
                        "top-[-10px] text-accent scale-90": isFocused,
                        "top-[-10px] text-gray-500 scale-90": !isFocused && hasValue,
                        "input-label-default": !isFocused && !hasValue && !errors.telephone,
                        "input-label-error": errors.telephone,
                    }), children: "Telefone *" }), errors.telephone && (_jsx(ErrorText, { children: errors.telephone.message }))] })) }));
};
export default PhoneInputField;
