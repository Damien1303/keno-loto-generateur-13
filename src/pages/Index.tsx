import { useState } from "react";
import { GameSelector } from "@/components/GameSelector";
import { NumberGenerator } from "@/components/NumberGenerator";
import { ResultsDisplay } from "@/components/ResultsDisplay";

const Index = () => {
  const [selectedGame, setSelectedGame] = useState<"keno" | "loto">("keno");
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800">Lucky Number Generator</h1>
          <p className="text-gray-600">Generate your lucky numbers for Keno or Loto</p>
        </div>
        <GameSelector selectedGame={selectedGame} onSelect={setSelectedGame} />
        <NumberGenerator gameType={selectedGame} onGenerate={setGeneratedNumbers} />
        {generatedNumbers.length > 0 && <ResultsDisplay numbers={generatedNumbers} />}
      </div>
    </div>
  );
};

export default Index;