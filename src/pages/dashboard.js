import { useEffect } from "react";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid lg:grid-cols-3 gap-y-32 lg:gap-4 justify-center lg:justify-between mx-auto lg:max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
