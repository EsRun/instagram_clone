import LoginPage from "./pages/auth/LoginPage";
import axios from "axios";
function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
