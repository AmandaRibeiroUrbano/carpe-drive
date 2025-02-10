import { useState } from "react";
import { Heart } from "lucide-react";
import { useSnackbar } from "@components/SnackbarContext";
import 'sonner/dist/styles.css';
import { Car } from "@/types/index";
import  Button  from "@components/Button";

export function CarCard({ model, dailyRate, image, year, brand, favorite = false }: Car) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { showSnackbar } = useSnackbar();


  const toggleFavorite = () => 
    {
    setIsFavorite(!isFavorite);
    localStorage.setItem(`favorite-${model}`, JSON.stringify(!isFavorite));
    showSnackbar({
      message: isFavorite ? "Carro removido dos favoritos" : "Carro adicionado aos favoritos"
    });
  };

  const addToCart = () => {
    showSnackbar({message: "Carro adicionado ao carrinho"});
  };


  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <button
          className="absolute right-2 top-2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"
            }`}
          />
        </button>
        <img
          src={image}
          alt={model}
          className="h-48 w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{model}</h3>
          <span className="text-accent font-bold">{`R$ ${dailyRate}/dia`}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
          <span>{year}</span>
          <span>{brand}</span>
        </div>
        <Button
          onClick={addToCart}
        >
          Alugar Agora
        </Button>
      </div>
    </div>
  );
}