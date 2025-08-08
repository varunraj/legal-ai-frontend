import { Button } from "@/components/ui/button";
import { Search, Gavel, FileText, Wallet, Clock } from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-indigo-600" />,
    title: "Search in Plain English",
    description:
      "Ask questions naturally—no legal jargon or Boolean queries required.",
  },
  {
    icon: <Gavel className="h-6 w-6 text-indigo-600" />,
    title: "Case Law, Not Guesses",
    description:
      "Every response is based on real, cited legal decisions you can verify.",
  },
  {
    icon: <FileText className="h-6 w-6 text-indigo-600" />,
    title: "Reasoning That Matters",
    description:
      "Understand the legal logic behind outcomes, not just the results.",
  },
  {
    icon: <Wallet className="h-6 w-6 text-indigo-600" />,
    title: "Built for Solo Attorneys",
    description:
      "Affordable, transparent pricing that respects small firm budgets.",
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-600" />,
    title: "Faster Research",
    description:
      "Cut hours of manual reading. Get insights in seconds, not days.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <header className="text-center">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Precedent Ai
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-700">
              Your Ai Co-Counsel
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 mb-8 text-sm font-medium">
            <div className="flex items-center gap-2 text-emerald-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Precision Search in Natural Language
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              Real Case Law, Not AI Guesses
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Save Hours of Research
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AI-powered legal research that delivers concise, trusted answers —
            grounded in real court precedents — so you can
            <span className="font-semibold text-indigo-600">
              {" "}
              focus on winning cases, not reading hundreds of pages.
            </span>
          </p>
          <div className="mt-6 flex justify-center">
            <Button>Try it Free</Button>
          </div>
        </header>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
            Why Legal Teams Choose Precedent AI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-24 text-center text-sm text-gray-600">
          © 2025 Precedent AI. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
