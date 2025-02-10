import { z } from "zod";
declare const schema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, string>;
    cpf: z.ZodEffects<z.ZodString, string, string>;
    telephone: z.ZodString;
    birthDate: z.ZodEffects<z.ZodEffects<z.ZodDate, Date, Date>, Date, Date>;
    email: z.ZodEffects<z.ZodString, string, string>;
    confirmEmail: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birthDate: Date;
    confirmEmail: string;
    confirmPassword: string;
}, {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birthDate: Date;
    confirmEmail: string;
    confirmPassword: string;
}>, {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birthDate: Date;
    confirmEmail: string;
    confirmPassword: string;
}, {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birthDate: Date;
    confirmEmail: string;
    confirmPassword: string;
}>, {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birthDate: Date;
    confirmEmail: string;
    confirmPassword: string;
}, {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birthDate: Date;
    confirmEmail: string;
    confirmPassword: string;
}>;
export type FormInputType = z.infer<typeof schema>;
declare const Register: () => import("react/jsx-runtime").JSX.Element;
export default Register;
