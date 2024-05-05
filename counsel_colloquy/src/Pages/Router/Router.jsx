import React from "react";
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Homepage from '../HomePage/Homepage'

const Router = () => {
  return (
    <div>
        <div className="flex">
            <div>
               <Sidebar/>
            </div>
            <div>
              <Routes>
                  <Route path="/" element={<Homepage/>}></Route>
              </Routes>
            </div>
        </div>
    </div>
  );
};

export default Router