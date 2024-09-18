export default function PrimaryButton({ children }) {
    return (
        <button className="bg-secondary text-milk rounded-3xl py-2 px-4 font-bodoni transition duration-300 ease-in-out hover:bg-milk hover:text-secondary hover:border hover:border-bronze">
            {children}
        </button>
    );
}
