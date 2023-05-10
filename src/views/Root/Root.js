import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/base/_index.scss';
import LandingView from 'views/LandingView/LandingView';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingView />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
