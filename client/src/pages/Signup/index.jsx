import { Link } from "react-router-dom";

function Signup() {
  const googleAuth = () => {
    window.open("http://localhost:8080/auth/google/callback", "_self");
  };
  return (
    <>
      <h1>Sign up Form</h1>
      <button onClick={googleAuth}>
        <span>Sing up with Google</span>
      </button>
      <p>
        Already Have Account ? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}
export default Signup;
