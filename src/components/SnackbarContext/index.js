import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
const SnackbarContext = createContext(undefined);
export const SnackbarProvider = ({ children }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("info");
    const showSnackbar = ({ message, type = "success" }) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(type);
        setSnackbarOpen(true);
    };
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    return (_jsxs(SnackbarContext.Provider, { value: { showSnackbar }, children: [children, _jsx(Snackbar, { open: snackbarOpen, autoHideDuration: 3000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: snackbarSeverity, sx: { width: "100%" }, children: snackbarMessage }) })] }));
};
export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context)
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    return context;
};
