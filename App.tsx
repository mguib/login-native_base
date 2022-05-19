import { NativeBaseProvider, Box } from "native-base";
import { Signing } from "./src/screens/Signing";

export default function App() {
  return (
    <NativeBaseProvider>
      <Signing/>
    </NativeBaseProvider>
  );
}