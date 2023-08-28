import Navbar from "../components/Navbar";
import AddQuoteComponent from "./AddQuote";

export const metadata = {
    title: "QQ - Add Quote",
    description: "Add a quick quotes"
};

function AddQuote() {
    return (
        <>
            <Navbar />
            <AddQuoteComponent />
        </>
    );
}

export default AddQuote;
