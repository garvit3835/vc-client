import { Link } from "react-router-dom"

export const Header = ({type}: {type: "signin" | "signup"}) => {
    return <div className="mb-12">
        <div className="font-bold text-3xl text-center ">
            {type === "signin" ? "Login to your account" : "Create an account"}
        </div>
        <div className="text-gray-500 mt-2 text-center mb-5">
            {type === "signin" ? "Don't have an account ?" : "Already have an account ?"}
            <Link to={`/${type === "signin" ? "signup" : "signin"}`} className="pl-2 underline">
                {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
        </div>
    </div>
}

