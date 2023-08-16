import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar isAuthenticated={false} />
            <div className="max-w-7xl mx-auto px-4 mt-8">
                <div className="bg-white p-8 rounded shadow">
                    <h1 className="text-2xl font-bold mb-4">Welcome, User!</h1>
                    <h1 className="text-2xl font-bold mb-4">
                        "The only limit to our realization of tomorrow will be
                        our doubts of today." - Franklin D. Roosevelt
                    </h1>
                    <p className="text-gray-600">
                        Believe in your potential and overcome your doubts.
                    </p>
                </div>
            </div>
        </>
    );
}
