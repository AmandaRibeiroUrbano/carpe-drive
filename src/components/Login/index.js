import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firebaseConfig";
import { useForm } from "react-hook-form";
import InputField from "@components/InputField";
import PasswordField from "@components/PasswordField";
import Button from "@components/Button";
import logo from "/logo.png";
import FooterSignIn from "@components/FooterSignIn";
import SocialMediaLogin from "@components/SocialMediaLogin";
import { UserCircle2 } from "lucide-react";
function Login() {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm({ mode: "all" });
    async function loginUser(data) {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log("User logged in successfully!");
            reset();
        }
        catch (error) {
            console.error("Login failed", error);
        }
    }
    return (_jsxs("div", { className: " w-full bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md", children: [_jsxs("div", { className: " flex flex-col items-center mb-6", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("h1", { className: "font-title text-center ", children: "Bem-vindo de volta" }), _jsx("img", { src: logo, alt: "logo", className: "self-center h-7" })] }), _jsx("p", { className: "font-subtitle", children: "Fa\u00E7a login na sua conta da CarpeDrive" })] }), _jsxs("form", { noValidate: true, onSubmit: handleSubmit(loginUser), children: [_jsxs("div", { className: "grid grid-cols-1 gap-5", children: [_jsx(InputField, { id: "email", name: "email", label: "E-mail", type: "email", register: register, error: errors.email, endAdornment: _jsx(UserCircle2, { className: "w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" }) }), _jsx(PasswordField, { id: "password", name: "password", label: "Senha", register: register, error: errors.password })] }), _jsx("div", { className: "text-right mt-2", children: _jsx("a", { href: "/esqueci-senha", className: "text-sm text-gray-600 dark:text-gray-400 underline", children: "Esqueceu sua senha?" }) }), _jsx("div", { className: "mt-6", children: _jsx(Button, { type: "submit", children: "Login" }) })] }), _jsxs("p", { className: "text-sm mt-5 text-gray-600 dark:text-gray-400 text-center", children: ["N\u00E3o tem uma conta? ", _jsx("a", { href: "/cadastro", className: "underline hover:text-accent", children: "Cadastre-se" })] }), _jsx(SocialMediaLogin, {}), _jsx(FooterSignIn, {})] }));
}
export default Login;
