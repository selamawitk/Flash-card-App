import Flashcard from './components/Flashcard';

export default function App() {
  const formulaJSX = (
    <div className="flex items-center space-x-1 text-2xl font-mono">
      <span>H</span>
      <span>—</span>

      <div className="flex flex-col items-center">
        <span>H</span>
        <span className="block w-0.5 h-5 bg-black"></span>
        <span>C</span>
        <span className="block w-0.5 h-5 bg-black"></span>
        <span>H</span>
      </div>

      <span>—</span>
      <span>O</span>
      <span>—</span>
      <span>H</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Flashcard
        formulaJSX={formulaJSX}
        name={<span className="text-4xl font-bold">Alcohol</span>}
      />
    </div>
  );
}
