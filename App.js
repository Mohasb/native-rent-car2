import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <WebView source={{ uri: "https://1e2a-80-26-111-140.ngrok-free.app" }} />
    </SafeAreaView>
  );
}
