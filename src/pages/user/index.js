import AppButton from "@/components/Button";
import React from "react";

const UserPage = () => {
  console.log("You are visiting UserPage");
  return (
    <div className="container">
      <AppButton
        message="Test"
        onClick={() => {
          console.log("hello");
        }}
      />
    </div>
  );
};

export default UserPage;
