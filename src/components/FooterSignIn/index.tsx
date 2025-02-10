
const FooterSignIn = () => {

    return(
        <footer className="text-xs text-center text-gray-500 dark:text-gray-400 m-4">
        Ao continuar, você concorda com nossos{" "}
        <a href="/termos" className="underline">
          Termos de Serviço
        </a>{" "}
        e{" "}
        <a href="/privacidade" className="underline">
          Política de Privacidade
        </a>
        .
      </footer>
    )
}

export default FooterSignIn