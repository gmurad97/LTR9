import "./App.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/common/Section/Section.jsx";
import CardList from "../components/CardList/CardList.jsx";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Section>
                <CardList />
            </Section>
        </div>
    );
}

export default App;