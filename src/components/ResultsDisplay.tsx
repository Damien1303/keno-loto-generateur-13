import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ResultsDisplayProps {
  numbers: number[];
}

export const ResultsDisplay = ({ numbers }: ResultsDisplayProps) => {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/90 shadow-lg animate-fade-in">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-center">Your Lucky Numbers</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {numbers.map((number, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary"
            >
              {number}
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
};