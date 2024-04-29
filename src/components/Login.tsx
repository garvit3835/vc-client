import { Header } from "./Header";
import { InputBox } from "./InputBox";


export const AuthSignIn = () => {
    // const navigate = useNavigate()
    // const [signinInputs, setSigninInputs] = useState<SigninInput>({
    //     name: "",
    //     email: "",
    //     password: ""
    // })

    // async function signin() {
    //     if (signinInputs.password.length < 8) {
    //         toast.error("Password should be at least 8 characters long.")
    //         return
    //     }
    //     try {
    //         const res = await axios.post(`${BACKEND_URL}/user/signin`, signinInputs)
    //         console.log(res)
    //         localStorage.setItem("token", res.data.token)
    //         navigate("/blogs")
    //     } catch (e) {
    //         if (e instanceof AxiosError) {
    //             toast.error(e.response?.data.msg || "An error occurred. Please try again later.");
    //         } else {
    //             toast.error("An error occurred. Please try again later.");
    //         }
    //     }
    // }

    return <div className="flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <Header type="signin" />
            <InputBox label="Email" type="email" placeholder="example@gmail.com"  />
            <InputBox label="Password" type="password" />
            <button className="bg-black text-white mt-5 p-2 rounded-lg" > Sign In </button>
        </div>

    </div>
}
