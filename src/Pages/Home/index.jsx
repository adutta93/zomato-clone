import React, { useState } from "react";
import Header from "../../Components/common/Header";
import TabOptions from "../../Components/common/Tabs";
import Footer from "../../Components/common/Footer";
import Delivery from "../../Components/Delivery";
import DiningOut from "../../Components/DiningOut";
import NightLife from "../../Components/NightLife";
import Pagepath from "../../Components/common/pagepath";
const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <Pagepath />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* change pages */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};
export default Home;
