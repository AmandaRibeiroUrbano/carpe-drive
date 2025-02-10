import { ReactNode } from "react";
interface SnackbarMessage {
    message: string;
    type?: "success" | "error" | "info";
}
interface SnackbarContextType {
    showSnackbar: (msg: SnackbarMessage) => void;
}
export declare const SnackbarProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useSnackbar: () => SnackbarContextType;
export {};
