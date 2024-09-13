import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton'; // Importamos el botón

export default function Card({ title, date, autor, stream }) {
    return (
        
        <div className="w-[300px] h-[420px] p-6 bg-secondary rounded-xl justify-center items-center gap-2.5 hidden">
            <div class="w-[273px] h-[357px] rounded-[20px] border border-bronze"></div>

            {/* General Container */}
            <div className="flex-col justify-end items-center gap-9 inline-flex">
                <div className="font-raleway text-xs">
                    <p>{title}</p>
                    <p>{date}</p>
                    <p>{autor}</p>
                    <p>{stream}</p>
                </div>

                {/* Buttons More and Delete */}
                <div>
                    <PrimaryButton>Ver más</PrimaryButton>
                    <SecondaryButton>Eliminar</SecondaryButton>
                </div>
            </div>

        </div>

    );
}