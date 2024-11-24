import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const url = location.state?.url;

  useEffect(() => {
    if (!url) {
      navigate("/");
      return;
    }

    // Simulate API call for SEO analysis
    const mockReport = {
      url,
      score: 78,
      sections: [
        {
          title: "Meta Information",
          status: "warning",
          items: [
            { name: "Title Tag", status: "success", message: "Present and optimal length" },
            { name: "Meta Description", status: "warning", message: "Present but too short" },
          ],
        },
        {
          title: "Header Structure",
          status: "success",
          items: [
            { name: "H1 Tag", status: "success", message: "Single H1 tag present" },
            { name: "Header Hierarchy", status: "success", message: "Proper structure" },
          ],
        },
        {
          title: "Image Optimization",
          status: "error",
          items: [
            { name: "Alt Tags", status: "error", message: "Missing alt tags on 3 images" },
            { name: "Image Size", status: "warning", message: "2 images need compression" },
          ],
        },
      ],
    };

    setReport(mockReport);
  }, [url, navigate]);

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/")}
            className="button-hover flex items-center gap-2 text-slate-600 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Analysis
          </button>

          <div className="glass-panel rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-slate-900">SEO Analysis Report</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Overall Score:</span>
                <span className="text-2xl font-bold text-slate-900">{report.score}</span>
              </div>
            </div>

            <div className="text-sm text-slate-500 break-all">{report.url}</div>
          </div>

          <div className="space-y-6">
            {report.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.status === "success" && (
                    <CheckCircle className="h-5 w-5 text-success" />
                  )}
                  {section.status === "warning" && (
                    <AlertCircle className="h-5 w-5 text-warning" />
                  )}
                  {section.status === "error" && (
                    <XCircle className="h-5 w-5 text-error" />
                  )}
                  <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50"
                    >
                      {item.status === "success" && (
                        <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      )}
                      {item.status === "warning" && (
                        <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                      )}
                      {item.status === "error" && (
                        <XCircle className="h-5 w-5 text-error mt-0.5" />
                      )}
                      <div>
                        <div className="font-medium text-slate-900">{item.name}</div>
                        <div className="text-sm text-slate-500">{item.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Report;