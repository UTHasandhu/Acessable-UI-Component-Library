import Home from "./pages/Home";
import './styles/tailwind.css';

export default function App() {
  return (
    <div>
      <main>
        <Home />
      </main>

      <footer className="bg-gray-100 border-t border-gray-800 p-4 text-center text-sm">
        Built With React &#x2022; Inclusive UI Pattern Library &#x2022; MVP v0.2
      </footer>
    </div>
  );
}