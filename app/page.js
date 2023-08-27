import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Quote
                statement="The only limit to our realization of tomorrow will be our doubts of today."
                author="Franklin D. Roosevelt"
            />
        </div>
    );
}
