import React from "react";

const Info = () => {
  const getCurrentUserEmail = () => {
    const email = localStorage.getItem("emailData");
    return email;
  };

  const getCurrentUser = () => {
    const email = getCurrentUserEmail();
    return { email };
  };

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="text-center mt-5">
      <h1>This is a new screen! You have logged in!</h1>
      <h2>{getCurrentUser().email} is currently logged in</h2>
      <button
        className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Info;
