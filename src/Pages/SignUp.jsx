import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const SignUp = () => {
  const usersRef = collection(db, "users"); // Reference to the 'users' collection in Firestore
  const navigate = useNavigate();

  // User state to store form data
  const [userForm, setUserForm] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });


  // Update user state on input change
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle basic user info submission to Firestore database
  // NOT used for authentication
  const addUserToFirestore = async () => {
    if (
      userForm.username &&
      userForm.phone &&
      userForm.email
    ) {
      // Add user to Firestore database
      const docRef = addDoc(usersRef, {
        username: userForm.username,
        phone: userForm.phone,
        email: userForm.email
      });
      navigate("/");
      alert("User signed up successfully!");
    } else {
      alert("Please fill out all fields");
      return;
    }
  };

  // TODO: Improve form validation and error handling
  const onSubmit = (e) => {
    e.preventDefault();

    /**
     * Create a new user with email and password using Firebase Authentication
     */
    createUserWithEmailAndPassword(auth, userForm.email, userForm.password)
      .then((userCredential) => {
        // Signed up AND signed in
        console.log("User signed up: ", userCredential.user);
        // Add user info to Firestore
        addUserToFirestore();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up: ", errorCode, errorMessage);
        alert("Error signing up, please try again");
      });
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col m-4 p-4">
        <span>Username</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          name="username"
          value={userForm.username}
          onChange={onChange}
          placeholder="First Name"
        />
        <span>Phone Number</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          name="phone"
          value={userForm.phone}
          onChange={onChange}
          placeholder="Phone Number"
        />
        <span>Email</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          name="email"
          value={userForm.email}
          onChange={onChange}
          placeholder="Email"
        />
        <span className="mt-4">Password</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          name="password"
          value={userForm.password}
          onChange={onChange}
          placeholder="Password"
        />
        {/* TODO: Implement password verification for length, special char, etc. criteria */}
        {/* <span className="mt-4">Verify Password</span>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Verify Password"
        /> */}
        <button
          className="bg-blue-500 rounded-xl text-white mx-4 w-1/4 p-4 mt-5"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <span className="bg-slate-400 rounded-xl text-white mx-4 px-4 py-3">
        <Link to="/">Cancel</Link>
      </span>
    </>
  );
};

export default SignUp;
