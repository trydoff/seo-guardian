import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }

    setIsLoading(true);
    // In a real app, we'd validate the URL here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/report", { state: { url } });
    } catch (error) {
      toast.error("Failed to analyze URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6 inline-block">
          SEO Analysis Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Check Your Page's SEO Health!
        </h1>
        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
          Enter your webpage URL below to get a detailed SEO analysis with actionable recommendations.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
          <div className="glass-panel rounded-2xl p-2 flex items-center gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter a webpage URL..."
                className="w-full pl-12 pr-4 py-4 bg-transparent placeholder-slate-400 text-slate-900 input-focus-ring rounded-xl"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="button-hover bg-slate-900 text-white px-6 py-4 rounded-xl font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                "Analyzing..."
              ) : (
                <>
                  Analyze Page
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success" />
            Instant Analysis
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-warning" />
            Detailed Reports
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-error" />
            Fix Recommendations
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;