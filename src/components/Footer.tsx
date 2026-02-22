export default function Footer() {
    return (
        <footer className="bg-light text-center py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-2 text-gray-800 font-bold text-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary-blue">
                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                    </svg>
                    Morwell Medical Centre
                </div>
                <p className="text-gray-500 mb-4">&copy; {new Date().getFullYear()} Morwell Medical Centre. All rights reserved.</p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="text-gray-500 hover:text-primary-blue transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-primary-blue transition-colors text-sm">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
