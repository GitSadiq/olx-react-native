import Navigate from "./src/nevigation";
import { Provider as PaperProvider } from "react-native-paper";
import "react-native-gesture-handler";

export default function App() {
  return (
    <PaperProvider>
      <Navigate />
    </PaperProvider>
  );
}
