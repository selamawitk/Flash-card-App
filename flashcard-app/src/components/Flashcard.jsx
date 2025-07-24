import { useState } from 'react';

export default function Flashcard({ formulaJSX, name }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-150 h-120 cursor-pointer [perspective:600px]"
    >
      <div
        className={`
          relative w-full h-full bg-white rounded-lg shadow-md transition-transform duration-500
          [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}
        `}
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden">
          {formulaJSX}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold backface-hidden [transform:rotateY(180deg)] rounded-lg">
          {name}
        </div>
      </div>
    </div>
  );
}
