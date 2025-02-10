import { useState, useEffect } from "react";
import { CarCard } from "@components/Cars";
import { ChatButton } from "@components/Chat/ChatButton";
import { db } from '@utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'
import { Car } from '@/types/index';
import Footer from "@components/Footer";

const App = () => {
  

  const [cars, setCars] = useState<Car[]>([]);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    async function searchCars() {
      const carsCollection = collection(db, 'cars');
      const snapshot = await getDocs(carsCollection);
  
      const carsData: Car[] = snapshot.docs.map((doc) => {
        const data = doc.data() as Car;
        return {
          ...data,
          carId: doc.id, // Add the carId to the object
        };
      });
      
      setCars(carsData);
    }
  
    searchCars();
  }, []);
  

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.carId} {...car} />
          ))}
        </div>

        <ChatButton onClick={() => setShowChat(!showChat)} $isOpen={showChat} />
      </main>
      <Footer />
      </>
  );
};

export default App;
