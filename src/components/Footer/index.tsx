import { SiFacebook, SiX, SiInstagram } from "react-icons/si";
import { SendHorizonal } from "lucide-react";
import { Input } from "@components/Input";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="max-w-60">
          <h2 className="text-lg font-bold">CarpeDrive.</h2>
          <p className="mt-2 text-sm text-justify">
            Escolha seu carro, parta para a estrada e viva experiências únicas.
            No CarpeDrive, a liberdade está ao alcance de um clique. Aproveite o
            momento, o resto é com a gente!
          </p>
          <div className="flex space-x-3 mt-4">
            <SiFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
            <SiX className="w-6 h-6 cursor-pointer hover:text-blue-400" />
            <SiInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        <div>
          <h3 className="font-bold">Nossos Serviços</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>Aluguel de Carros</li>
            <li>Locação Longo Prazo</li>
            <li>Transporte Executivo</li>
            <li>Planos Corporativos</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Links Rápidos</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>Início</li>
            <li>Frota</li>
            <li>Sobre Nós</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Newsletter</h3>
          <p className="mt-2 text-sm">
            Assine nossa newsletter para ofertas e novidades exclusivas.
          </p>
          <div className="mt-3 flex gap-2">
            <Input
            name="newsLetterEmail"
            placeholder="Digite o seu e-mail"
              type="email"
              label="E-mail"
            />
            <button><SendHorizonal className="hover:text-accent" /></button>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} CarpeDrive. Todos os direitos reservados.
        <br />
        Projeto sem fins lucrativos.
      </div>
    </footer>
  );
}
