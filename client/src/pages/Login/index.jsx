import { Link } from "react-router-dom";
 
function Login() {
  const googleAuth = () => {
    window.open(
      "http://localhost:8080/auth/google/callback",
      // `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <>
      <h1>Log in Form</h1>

      <button   onClick={googleAuth}>
         <span>Sing in with Google</span>
      </button>
      <p  >
        New Here ? <Link to="/signup">Sing Up</Link>
      </p>
    </>
  );
}

export default Login;
