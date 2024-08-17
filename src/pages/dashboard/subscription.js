import React from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell } from "react-icons/fi";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import { notifySuccess } from "@utils/toast";
import InputArea from "@component/form/InputArea";
import Sidebar from "./sidebar";

const Subscription = () => {
  return (
    <>
      <Sidebar>
        <div className="flex-grow p-6">
          <h1 className="text-2xl font-semibold">Subscription Page</h1>
          {/* Inventory content goes here */}
        </div>
      </Sidebar>
    </>
  );
};

export default Subscription;
