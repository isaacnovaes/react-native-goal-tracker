import AppContainer from "./components/AppContainer/AppContainer";
import { ContextProvider } from "./context/ContextProvider";

export default function App() {
    return (
        <ContextProvider>
            <AppContainer />
        </ContextProvider>
    );
}
