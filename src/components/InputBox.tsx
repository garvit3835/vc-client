// import { ChangeEvent } from "react";

import { MailIcon, PasswordIcon } from "../assets/manager";

interface InputBoxProps {
    label: string;
    type: "email" | "password" | "text";
    placeholder?: string;
    // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ label, type, placeholder }: InputBoxProps) => {
    return <div>
        <label className="text-sm font-medium block mb-2">{label}</label>
        <div className="relative flex items-center">
            <input name={label} type={type} required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder={placeholder} />
            {type === "email" ? <MailIcon /> : type === "password" ? <PasswordIcon /> : null}
        </div>
    </div>
}