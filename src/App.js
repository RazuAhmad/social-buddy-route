import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./Components/Button/Button";
import FetchData from "./Components/FetchData/FetchData";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Section from "./Components/Section/Section";
import ShowDetailsCompo from "./Components/ShowDetailsCompo/ShowDetailsCompo";

const App = () => {
  return (
    <div>
      <h1>This is react router social buddy</h1>

      <Button />
      {/* <UserDetails /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<FetchData />} /> */}
        <Route path="/home" element={<FetchData />} />
        <Route path="/userDetails/:detailsId" element={<ShowDetailsCompo />} />

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/section" element={<Section />} />
      </Routes>
    </div>
  );
};

export default App;
