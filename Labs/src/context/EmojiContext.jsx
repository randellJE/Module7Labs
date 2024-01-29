import React, { useState, useContext } from "react";

// Creating a context for Emoji
const EmojiContext = React.createContext();

// Provider component for EmojiContext
export const EmojiProvider = ({ children }) => {
  // State to store the current emoji
  const [emoji, setEmoji] = useState("😃");

  // Function to toggle the emoji
  const changeMood = () => {
    setEmoji((prevEmoji) => (prevEmoji === "😃" ? "😞" : "😃"));
  };

  // Providing emoji and changeMood function to the context 
  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

// Custom hook to use the EmojiContext
export const useEmojiContext = () => useContext(EmojiContext);