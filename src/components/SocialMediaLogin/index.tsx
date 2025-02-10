import { SiFacebook, SiGoogle } from "react-icons/si";

const SocialMediaLogin = () => {
  return (
    <div className="text-center">
      <div className="flex items-center my-5">
        <hr className="flex-grow border-gray-400 dark:border-gray-500" />
        <span className="mx-2 text-sm text-gray-400 dark:text-gray-500">
          OU
        </span>
        <hr className="flex-grow border-gray-400 dark:border-gray-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
        <button className="flex gap-5 p-2 pl-4 rounded-lg border text-[#db4939] dark:text-[#f58174] border-gray-300 dark:border-gray-500 hover:bg-[#fde6e3] dark:hover:bg-gray-700">
          <SiGoogle size={24} /> <p> Entrar com o Google </p>
        </button>
        <button className="p-2 pl-4 flex gap-5 rounded-lg border text-[#3b5998] dark:text-[#a0b4d9] border-gray-300 dark:border-gray-500 hover:bg-[#e8ebf6] dark:hover:bg-gray-700">
          <SiFacebook size={24} /> <p> Entrar com o Facebook </p>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
