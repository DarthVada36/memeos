export default function SecondaryButton({ children }) {
    return (
        <button className="bg-primary text-milk rounded-xl py-2 px-4 font-bodoni hover:bg-secondary transition">
            {children}
        </button>
        );
    }
