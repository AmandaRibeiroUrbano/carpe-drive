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
    .transform((val) =>
      val
        .toLowerCase()
        .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
    ),    
    cpf: z
      .string()
      .min(14, "CPF Obrigátorio!")
      .refine((val) => cpf.isValid(val.replace(/\D/g, "")), {
        message: "CPF inválido",
      }),
    telephone: z
      .string({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_type"
              ? "Digite um número válido"
              : defaultError,
        })
      })
      .nonempty("Campo Obrigatório"),
    birthDate: z
    .coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_date" ? "Data Inválida" : defaultError,
        }),
      })
      .refine((date) => date < new Date(), {
        message: "Insira uma data válida",
      })
      .refine(
        (date) => {
          const minDate = new Date();
          minDate.setFullYear(minDate.getFullYear() - 18);
          return date <= minDate;
        },
        { message: "Você deve ter pelo menos 18 anos" }
      ),
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

export type FormInputType = z.infer<typeof schema>;

 const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormInputType>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  async function newUser(data: FormInputType) {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      reset();
      navigate("/");
    } catch (error: any) {
      console.error(error);
      showSnackbar({ message: error.message || "Erro ao criar conta", type: "error" });
    }
  }

  console.log("error:", errors);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-sm bg-white dark:bg-gray-900 px-8 py-4 sm:mt-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <div className="flex gap-2">
            <h1 className="font-title text-center">Boas vindas</h1>
            <img src={logo} alt="logo" className="self-center h-7" />
          </div>
          <p className="font-subtitle">
            Crie sua conta para alugar carros na CarpeDrive{" "}
          </p>
        </div>

        <form noValidate={true} onSubmit={handleSubmit(newUser)}>
          <div
            className={classNames(
              "grid grid-cols-1 items-start sm:grid-cols-2 gap-7"
            )}
          >
            <InputField
              id="name"
              name="name"
              label="Nome Completo"
              register={register}
              error={errors.name}
            />

            <InputField
              id="cpf"
              name="cpf"
              label="CPF"
              type="text"
              register={register}
              mask="000.000.000-00"
              error={errors.cpf}
            />

            <PhoneInputField control={control} errors={errors} />

            <InputField
              id="birthDate"
              name="birthDate"
              label="Data de Nascimento"
              register={register}
              type="date"
              error={errors.birthDate}
            />

            <InputField
              id="email"
              name="email"
              label="E-mail"
              type="email"
              register={register}
              error={errors.email}
            />

            <InputField
              id="confirmEmail"
              name="confirmEmail"
              label="Confirmar E-mail"
              type="email"
              register={register}
              error={errors.confirmEmail}
            />

            <PasswordField
              id="password"
              name="password"
              label="Senha"
              register={register}
              error={errors.password}
              showRules={true}
              showErrorMessage={false}
            />

            <PasswordField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmar Senha"
              register={register}
              error={errors.confirmPassword}
            />
          </div>

          <div className="mt-6">
            <Button type="submit">Cadastrar</Button>
          </div>

          <p className="text-sm mt-5 text-gray-600 dark:text-gray-400 text-center">
            Já tem uma conta?{" "}
            <a href="/login" className=" underline hover:text-accent">
              Login
            </a>
          </p>
           <SocialMediaLogin /> 
        </form>
      </div>
      <FooterSignIn />
    </div>
  );
}

export default Register;
