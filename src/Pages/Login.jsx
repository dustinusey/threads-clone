import { Link } from "react-router-dom";
import headerImg from "../assets/loginheader.png";
import { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { UserContext } from "../Components/UserProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleSignin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  /* Check if user is logged in */
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      console.log("User logged in: ");
      console.log(user);
      setIsLoggedIn(true);
    } else {
      setUser(null);
    }
  });

  // Update email/password states on input change
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in: ");
        console.log(user);
        setUser(user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error.message);
        alert("Invalid email or password");
      });
  };

  return (
    <div className="h-screen bg-gradient-to-t from-[#151719] to-[#27292C] flex flex-col">
      <img className="fixed top-0 scale-110" src={headerImg} />
      <form className="w-full max-w-[400px] m-auto" onSubmit={handleLogin}>
        <p className="text-white text-center mb-5 text-lg">
          Welcome to Threads, please log in
        </p>
        <input
          className="p-5 w-full rounded-xl mb-1 bg-zinc-700 placeholder:text-zinc-400 text-white outline-none border-[1px] border-zinc-500 font-light"
          type="text"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Username, phone or email"
        />
        <input
          className="p-5 w-full rounded-xl mb-1 bg-zinc-700 placeholder:text-zinc-400 text-white outline-none border-[1px] border-zinc-500 font-light"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="p-5 w-full rounded-xl bg-white placeholder:text-zinc-400 text-zinc-800 font-semibold outline-none border-[1px] border-zinc-500"
        >
          Log in
        </button>
        <button onClick={googleSignin} className="rounded-md mt-2 p-1 bg-white">
          Login with Google
        </button>
        <span className="rounded-xl text-white p-2 ml-4 ">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
