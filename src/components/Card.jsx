import PrimaryButton from './PrimaryButton'; // Importamos el botón

export default function Card({ imageSrc, title }) {
    return (
        <div className="w-[300px] h-[420px] p-6 bg-[#ede7e1] rounded-xl justify-center items-center gap-2.5   inline-flex">
            <div className="flex-col justify-end items-center gap-9 inline-flex">
            <img
                className="w-64 h-[222px] relative rounded-xl border-4 border-[#9c7e41]"
                src={imageSrc} // Asegúrate de que la ruta se recibe correctamente
                alt={title}
            />
            <div className="h-[45px] flex-col justify-start items-start gap-[18px] flex">
                <div className="w-64 h-[45px] text-center text-[#4d4c47] text-lg font-medium font-bodoni">
                {title}
                </div>
            </div>
            <div className="justify-center items-center gap-[17px] inline-flex">
            {/* Botón "Editar" */}
            <PrimaryButton>Editar</PrimaryButton>

            <PrimaryButton>Detalles</PrimaryButton>
            </div>
            </div>
        </div>
        );
    }
  
