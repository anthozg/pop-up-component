import React, { useState } from "react";

interface WelcomePopupProps {
  imageUrl: string;
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({imageUrl, onClose}) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Correo electrónico enviado:", email);
    setEmail("");
  };

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white rounded-lg p-3 w-full max-w-md mx-4 sm:mx-0 sm:flex">
                
            <img src={imageUrl} alt="Imagen" className="w-full h-auto sm:w-56 sm:h-66 mr-2 rounded-lg "/>
            <button
                className="text-gray-600 hover:text-gray-800 absolute top-0 right-0 mt-2 mr-2 sm:mt-0 sm:mr-0"
                onClick={onClose}
            >
              X
            </button>


            <div className="mt-4 sm:mt-0 flex-grow">
                <p className="text-lg font-bold text-gray-800 mb-2">Bienvenido a WanderLuxe</p>
                <p className="text-md text-gray-600 mb-4">Obtén un 10% de descuento</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                    type="email"
                    className="border border-gray-300 rounded px-1 py-2 mb-1"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 self-end"
                    >
                    Enviar
                    </button>
                    
                </form>
            </div>

        </div>
    </div>
  );
};

  

export default WelcomePopup;