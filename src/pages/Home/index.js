import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { CarCard } from "@components/Cars";
import { ChatButton } from "@components/Chat/ChatButton";
import { db } from '@utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Footer from "@components/Footer";
const App = () => {
    const [cars, setCars] = useState([]);
    const [showChat, setShowChat] = useState(false);
    useEffect(() => {
        async function searchCars() {
            const carsCollection = collection(db, 'cars');
            const snapshot = await getDocs(carsCollection);
            const carsData = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    ...data,
                    carId: doc.id, // Add the carId to the object
                };
            });
            setCars(carsData);
        }
        searchCars();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("main", { className: "min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 container mx-auto px-8 py-12", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: cars.map((car) => (_jsx(CarCard, { ...car }, car.carId))) }), _jsx(ChatButton, { onClick: () => setShowChat(!showChat), "$isOpen": showChat })] }), _jsx(Footer, {})] }));
};
export default App;
