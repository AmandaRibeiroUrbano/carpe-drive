import classNames from "classnames";

interface InputLabelProps {
  id: string;
  error: boolean;
  label: string;
}

export const InputLabel = ({ id, error, label }: InputLabelProps) => {
  return (
    <label
        htmlFor={id}
        className={classNames("input-label", {
          "input-label-default": !error,
          "input-label-error": error,
        })}
      >
        {label}
        <span className="peer-focus:!text-red-600 peer-focus:!dark:text-red-400">
          {" *"}
        </span>
      </label>
  );
};
