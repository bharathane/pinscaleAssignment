import { Routes, Route } from "react-router-dom";

import Login from "./components/LoginRoute";

import Accounts from "./components/AccountsRoute";

import Profile from "./components/Profile";

import TransactionRoute from "./components/TranscationRoute";

import NotFound from "./components/NotFount";

import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/" element={<Accounts />} />
    <Route exact path="/transactions" element={<TransactionRoute />} />
    <Route exact path="/profile" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
