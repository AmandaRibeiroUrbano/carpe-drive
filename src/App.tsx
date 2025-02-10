import { SnackbarProvider } from "@components/SnackbarContext";
import RoutesApp from "./routes";
import "@fontsource/inter";
import "@fontsource/montserrat";

function App() {
  return (
    <SnackbarProvider>
      <RoutesApp />
    </SnackbarProvider>
  );
}

export default App;
