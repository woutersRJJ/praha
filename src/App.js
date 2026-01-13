import "./App.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {HomePage} from "./components/routes/Homepage";
import {Sidebar} from "./components/Sidebar";
import {DiscoverPage} from "./components/routes/DiscoverPage";
import {ExperiencePage} from "./components/routes/ExperiencePage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        // <HashRouter>
            <div className="body">
                <Header/>
                <Sidebar/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/discover" element={<DiscoverPage />} />
                        <Route path="/experience" element={<ExperiencePage />} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        // </HashRouter>
    );
}

export default App;