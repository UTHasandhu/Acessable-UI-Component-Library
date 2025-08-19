import Home from "./pages/Home";
import './styles/tailwind.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <main className="flex-1">
        <Home />
      </main>

      <footer className="bg-gray-100 p-4 text-center text-sm">
        Inclusive UI Pattern Library — MVP v0.1
      </footer>
    </div>
  );
}