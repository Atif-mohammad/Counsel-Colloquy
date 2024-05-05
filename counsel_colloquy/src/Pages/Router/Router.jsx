import React from "react";
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Homepage from '../HomePage/Homepage'
import Profile from "../Profile/Profile";
const Router = () => {
  return (
    <div>
        <div className="flex">
            <div className="w-[20%] border border-1-slate-500">
               <Sidebar/>
            </div>
            <div>
              <Routes>
                  <Route path="/" element={<Homepage/>}></Route>
                  <Route path="/username" element={<Profile/>}></Route>
              </Routes>
            </div>
        </div>
    </div>
  );
};

export default Router