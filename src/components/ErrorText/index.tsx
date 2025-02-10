
export const ErrorText: React.FC<{ children: string }> = ({ children }) => {
  return (
    <p className="input-label-error absolute top-12 left-2 text-xs">
      {children}
    </p>
  );
};