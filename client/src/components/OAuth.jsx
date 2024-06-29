import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import { useDispatch } from "react-redux"
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider)
            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (err) {
            console.log("Could not signin with google ", err)
        }
    }
    return (
        <button
            type='button'
            className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
            onClick={handleGoogleClick}
        >

            Continue with google
        </button>
    )
}

export default OAuth

// button type is submit by default
// change it to button to change its type
// button is inside form 