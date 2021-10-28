import React, { useState } from "react";
import Header from "../../Components/common/Header";
import TabOptions from "../../Components/common/Tabs";
import Footer from "../../Components/common/Footer";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions />
      {/* change pages */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <div>Delivery page</div>;
    case "Dining Out":
      return <div>Dining Out</div>;
    case "Night Life":
      return <div>Night Life</div>;
    default:
      return <div>Delivery page</div>;
  }
};
export default Home;
