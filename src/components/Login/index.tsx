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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  async function loginUser(data: any) {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("User logged in successfully!");
      reset();
    } catch (error) {
      console.error("Login failed", error);
    }
  }

  return (
    <div className=" w-full bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <div className=" flex flex-col items-center mb-6">
          <div className="flex gap-2">
            <h1 className="font-title text-center ">Bem-vindo de volta</h1>
            <img src={logo} alt="logo" className="self-center h-7" />
          </div>
          <p className="font-subtitle">Faça login na sua conta da CarpeDrive</p>
        </div>

        <form noValidate={true} onSubmit={handleSubmit(loginUser)}>
          <div className="grid grid-cols-1 gap-5">
            <InputField
              id="email"
              name="email"
              label="E-mail"
              type="email"
              register={register}
              error={errors.email}
              endAdornment={<UserCircle2 className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />}
            />

            <PasswordField
              id="password"
              name="password"
              label="Senha"
              register={register}
              error={errors.password}
            />
          </div>

          <div className="text-right mt-2">
            <a href="/esqueci-senha" className="text-sm text-gray-600 dark:text-gray-400 underline">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="mt-6">
            <Button type="submit">Login</Button>
          </div>
        </form>

        <p className="text-sm mt-5 text-gray-600 dark:text-gray-400 text-center">
          Não tem uma conta? <a href="/cadastro" className="underline hover:text-accent">Cadastre-se</a>
        </p>
        <SocialMediaLogin />
        <FooterSignIn />
      </div>
  );
}

export default Login;
