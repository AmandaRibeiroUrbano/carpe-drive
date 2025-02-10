import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firebaseConfig";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cpf } from "cpf-cnpj-validator";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "@components/SnackbarContext";
import InputField from "@components/InputField";
import PhoneInputField from "@components/PhoneInputField";
import PasswordField from "@components/PasswordField";
import Button from "@components/Button";
import logo from "/logo.png";
import classNames from "classnames";
import SocialMediaLogin from "@components/SocialMediaLogin";
import FooterSignIn from "@components/FooterSignIn";
const schema = z
    .object({
    name: z
        .string()
        .nonempty("Campo Obrigatório")
        .min(4, "Digite o nome completo")
        .transform((val) => val
        .toLowerCase()
        .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())),
    cpf: z
        .string()
        .min(14, "CPF Obrigátorio!")
        .refine((val) => cpf.isValid(val.replace(/\D/g, "")), {
        message: "CPF inválido",
    }),
    telephone: z
        .string({
        errorMap: (issue, { defaultError }) => ({
            message: issue.code === "invalid_type"
                ? "Digite um número válido"
                : defaultError,
        })
    })
        .nonempty("Campo Obrigatório"),
    birthDate: z
        .coerce
        .date({
        errorMap: (issue, { defaultError }) => ({
            message: issue.code === "invalid_date" ? "Data Inválida" : defaultError,
        }),
    })
        .refine((date) => date < new Date(), {
        message: "Insira uma data válida",
    })
        .refine((date) => {
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 18);
        return date <= minDate;
    }, { message: "Você deve ter pelo menos 18 anos" }),
    email: z
        .string()
        .email("O email não é válido")
        .transform((val) => val.toLocaleLowerCase()),
    confirmEmail: z.string(),
    password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    confirmPassword: z.string(),
})
    .refine((data) => data.confirmEmail === data.email, {
    message: "Os e-mails não coincidem",
    path: ["confirmEmail"],
})
    .refine((data) => data.confirmPassword === data.password, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});
const Register = () => {
    const { register, handleSubmit, control, formState: { errors }, reset, } = useForm({
        mode: "all",
        resolver: zodResolver(schema),
    });
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();
    async function newUser(data) {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            reset();
            navigate("/");
        }
        catch (error) {
            console.error(error);
            showSnackbar({ message: error.message || "Erro ao criar conta", type: "error" });
        }
    }
    console.log("error:", errors);
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center", children: [_jsxs("div", { className: "w-full max-w-screen-sm bg-white dark:bg-gray-900 px-8 py-4 sm:mt-6 rounded-lg shadow-md", children: [_jsxs("div", { className: "flex flex-col items-center mb-6", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("h1", { className: "font-title text-center", children: "Boas vindas" }), _jsx("img", { src: logo, alt: "logo", className: "self-center h-7" })] }), _jsxs("p", { className: "font-subtitle", children: ["Crie sua conta para alugar carros na CarpeDrive", " "] })] }), _jsxs("form", { noValidate: true, onSubmit: handleSubmit(newUser), children: [_jsxs("div", { className: classNames("grid grid-cols-1 items-start sm:grid-cols-2 gap-7"), children: [_jsx(InputField, { id: "name", name: "name", label: "Nome Completo", register: register, error: errors.name }), _jsx(InputField, { id: "cpf", name: "cpf", label: "CPF", type: "text", register: register, mask: "000.000.000-00", error: errors.cpf }), _jsx(PhoneInputField, { control: control, errors: errors }), _jsx(InputField, { id: "birthDate", name: "birthDate", label: "Data de Nascimento", register: register, type: "date", error: errors.birthDate }), _jsx(InputField, { id: "email", name: "email", label: "E-mail", type: "email", register: register, error: errors.email }), _jsx(InputField, { id: "confirmEmail", name: "confirmEmail", label: "Confirmar E-mail", type: "email", register: register, error: errors.confirmEmail }), _jsx(PasswordField, { id: "password", name: "password", label: "Senha", register: register, error: errors.password, showRules: true, showErrorMessage: false }), _jsx(PasswordField, { id: "confirmPassword", name: "confirmPassword", label: "Confirmar Senha", register: register, error: errors.confirmPassword })] }), _jsx("div", { className: "mt-6", children: _jsx(Button, { type: "submit", children: "Cadastrar" }) }), _jsxs("p", { className: "text-sm mt-5 text-gray-600 dark:text-gray-400 text-center", children: ["J\u00E1 tem uma conta?", " ", _jsx("a", { href: "/login", className: " underline hover:text-accent", children: "Login" })] }), _jsx(SocialMediaLogin, {})] })] }), _jsx(FooterSignIn, {})] }));
};
export default Register;
