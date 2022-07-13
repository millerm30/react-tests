import React from "react";
import Header from "../header/Header";
import Think from "../think/Think";
import Testing from "../testing/Testing";
import Users from "../users/Users";
import Showhide from "../showhide/Showhide";
import Inputshow from "../inputshow/Inputshow";
import Valuechange from "../valuechange/Valuechange";
import Counter from "../counter/Counter";
import Userdata from "../userdata/Userdata";
import Addnumbers from "../addnumbers/Addnumbers";
import Time from "../time/Time";
import Modal from "../modal/Modal";
import Uniqueid from "../uniqueid/Uniqueid";
import Tailwindcss from "../tailwindcss/Tailwindcss";
import Useeffect from "../useeffect/Useeffect";
import Props from "../props/Props";
import Tictactoe from "../tictactoe/Tictactoe";
import Userprofile from "../userprofile/Userprofile";
import Footer from "../footer/Footer";
import Info from "../auth/Info";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Info />
      <Think />
      <Testing />
      <Users />
      <Showhide />
      <Inputshow />
      <Valuechange />
      <Counter />
      <Userdata />
      <Addnumbers />
      <Time />
      <Modal />
      <Uniqueid />
      <Tailwindcss />
      <Useeffect />
      <Props />
      <Tictactoe />
      <Userprofile />
      <Footer />
    </div>
  );
};

export default Layout;
