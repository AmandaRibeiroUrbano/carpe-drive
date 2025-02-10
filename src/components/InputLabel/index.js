import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
export const InputLabel = ({ id, error, label }) => {
    return (_jsxs("label", { htmlFor: id, className: classNames("input-label", {
            "input-label-default": !error,
            "input-label-error": error,
        }), children: [label, _jsx("span", { className: "peer-focus:!text-red-600 peer-focus:!dark:text-red-400", children: " *" })] }));
};
