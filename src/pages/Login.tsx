// import { AuthSignIn } from "../components/Login"
// import { Quote } from "../components/Quote"

import { AppleIcon, FaceBookIcon, GoogleIcon } from "../assets/manager"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"

export const Login = () => {
    return <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
            <div className="md:max-w-md items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md bg-white">
                <div className=" w-full sm:px-6 py-4">
                    <form>
                        <Header type="signin" />
                        <InputBox label="Email" type="email" placeholder="example@gmail.com" />
                        <div className="mt-8"></div>
                        <InputBox label="Password" type="password" placeholder="password" />

                        <div className="flex items-center justify-between gap-2 mt-5">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600focus:ring-blue-500 border-gray-300 rounded" />
                                <label className="ml-3 block text-sm">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                {/* TODO: Add Forgot Password Link */}
                                <a href="jajvascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-12">
                            <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Sign in
                            </button>
                        </div>
                        <p className="my-8 text-sm text-gray-400 text-center">or continue with</p>
                        <div className="space-x-8 flex justify-center">
                            <button type="button"
                                className="border-none outline-none">
                                <GoogleIcon />
                            </button>
                            <button type="button"
                                className="border-none outline-none">
                                <AppleIcon />
                            </button>
                            <button type="button" className="border-none outline-none">
                                <FaceBookIcon />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}