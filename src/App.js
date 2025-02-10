import { jsx as _jsx } from "react/jsx-runtime";
import { SnackbarProvider } from "@components/SnackbarContext";
import RoutesApp from "./routes";
import "@fontsource/inter";
import "@fontsource/montserrat";
function App() {
    return (_jsx(SnackbarProvider, { children: _jsx(RoutesApp, {}) }));
}
export default App;
