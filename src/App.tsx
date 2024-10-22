import Navbar from "./components/Navbar";
import GameCards from "./components/GameCards";
import { GamesProvider } from "./context/GamesProvider";

function App() {
  return (
    <GamesProvider>
      <div className="min-h-screen flex flex-col">
        {/* navbar here */}
        <Navbar />

        {/* list of games here */}
        <GameCards />

        <footer className="mt-auto w-full flex justify-center py-6 bg-main-black">
          <p className="text-white">
            <b>React Developer Technical Test</b> by{" "}
            <a
              href="https://www.linkedin.com/in/wismannur/"
              className="hover:text-blue-400 hover:underline"
            >
              Wisman Nur
            </a>
          </p>
        </footer>
      </div>
    </GamesProvider>
  );
}

export default App;
