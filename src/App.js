import "./App.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {HomePage} from "./components/routes/Homepage";
import {Sidebar} from "./components/Sidebar";
import {HashRouter,Routes,Route} from "react-router-dom";
import {FavoritesPage} from "./components/routes/FavoritesPage";

function App() {
    return (
        <HashRouter>
            <div className="body">
                <Header/>
                <Sidebar/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;