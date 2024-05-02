import headerImg from "../assets/loginheader.png";
import { useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { UserContext } from "../Components/UserProvider";

const Login = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const googleSignin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    setIsLoggedIn(true);
    signInWithPopup(auth, provider);
  };

  /* Check if user is logged in */
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      console.log("User logged in: ");
      console.log(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="h-screen bg-gradient-to-t from-[#151719] to-[#27292C] flex flex-col">
      <img className="fixed top-0 scale-110" src={headerImg} />
      <form className="w-full max-w-[400px] m-auto">
        <p className="text-white text-center mb-5 text-lg">
          Welcome to Threads, please log in
        </p>
        <input
          className="p-5 w-full rounded-xl mb-1 bg-zinc-700 placeholder:text-zinc-400 text-white outline-none border-[1px] border-zinc-500 font-light"
          type="text"
          placeholder="Username, phone or email"
        />
        <input
          className="p-5 w-full rounded-xl mb-1 bg-zinc-700 placeholder:text-zinc-400 text-white outline-none border-[1px] border-zinc-500 font-light"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
          className="p-5 w-full rounded-xl bg-white placeholder:text-zinc-400 text-zinc-800 font-semibold outline-none border-[1px] border-zinc-500"
        >
          Log in
        </button>
        <button onClick={googleSignin} className="rounded-md mt-2 p-1 bg-white">
          Login with Google
        </button>
      </form>
    </div>
  );
};
export default Login;
