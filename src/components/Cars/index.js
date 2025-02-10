import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Heart } from "lucide-react";
import { useSnackbar } from "@components/SnackbarContext";
import 'sonner/dist/styles.css';
import Button from "@components/Button";
export function CarCard({ model, dailyRate, image, year, brand, favorite = false }) {
    const [isFavorite, setIsFavorite] = useState(favorite);
    const { showSnackbar } = useSnackbar();
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        localStorage.setItem(`favorite-${model}`, JSON.stringify(!isFavorite));
        showSnackbar({
            message: isFavorite ? "Carro removido dos favoritos" : "Carro adicionado aos favoritos"
        });
    };
    const addToCart = () => {
        showSnackbar({ message: "Carro adicionado ao carrinho" });
    };
    return (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg", children: [_jsxs("div", { className: "relative", children: [_jsx("button", { className: "absolute right-2 top-2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80", onClick: toggleFavorite, children: _jsx(Heart, { className: `h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"}` }) }), _jsx("img", { src: image, alt: model, className: "h-48 w-full object-cover object-center" })] }), _jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white", children: model }), _jsx("span", { className: "text-accent font-bold", children: `R$ ${dailyRate}/dia` })] }), _jsxs("div", { className: "flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4", children: [_jsx("span", { children: year }), _jsx("span", { children: brand })] }), _jsx(Button, { onClick: addToCart, children: "Alugar Agora" })] })] }));
}
