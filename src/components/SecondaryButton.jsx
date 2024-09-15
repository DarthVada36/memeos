export default function SecondaryButton({ children }) {
    return (
        <button className="bg-milk text-secondary border border-bronze rounded-3xl py-2 px-4 font-bodoni transition duration-300 ease-in-out hover:bg-primary hover:text-milk">
            {children}
        </button>
    );
}
