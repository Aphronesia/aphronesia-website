import Link from "next/link";

const Footer = () => {
    return (

        <footer className="bg-gray-100 dark:bg-neutral-800 py-6 text-center mt-10">
            <p className="=text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Aphronesia. Todos os direitos reservados.</p>
        </footer>   
    );
};
export default Footer