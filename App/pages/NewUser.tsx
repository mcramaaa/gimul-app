import { Keyboard } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useUser } from "../hooks/zustand";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";

export default function NewUser() {
  const { setUser } = useUser();
  const [userName, setUserName] = useState("");

  const Navigation = useNavigation();

  function handleSubmit() {
    setUser(userName);
    Keyboard.dismiss();
    Navigation.navigate("AppTabs" as never);
  }

  function handleTextInput(value: string) {
    setUserName(value);
  }

  return (
    <Layout
      motherStyle={{ backgroundColor: "#FFF0F5" }}
      childStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppTextInput
        tittle="Masukkan Nama :"
        placeholder="masukkan nama"
        onChange={handleTextInput}
        onSubmit={handleSubmit}
        style={{ backgroundColor: "white", elevation: 4 }}
      />
    </Layout>
  );
}
