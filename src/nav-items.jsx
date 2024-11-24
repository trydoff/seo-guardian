import { HomeIcon, BarChartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Report from "./pages/Report.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Report",
    to: "/report",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: <Report />,
  },
];