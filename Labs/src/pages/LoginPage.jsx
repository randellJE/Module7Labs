import { UserProvider } from "../context/UserContext";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="LoginPage">
      <UserProvider>
      <LoginForm />
      </UserProvider>
    </div>
  );
}

export default LoginPage;