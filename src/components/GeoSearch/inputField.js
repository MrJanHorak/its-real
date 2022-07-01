import React from "react";
import useInput from "./useInput";

import "../../styles/inputField.css";

const InputField = ({ handleSearchResult }) => {
  const address = useInput("");

  return (
    <div id="input-wrapper">
      <input
        id="search-input"
        placeholder="Search Location"
        {...address}
        isTyping={address.value !== ""}
      />
      {address.suggestions?.length > 0 && (
        <div id="suggestions-wrapper">
          {address.suggestions.map((suggestion, index) => {
            return (
              <div
                id="suggestions"
                key={index}
                onClick={() => {
                  address.setValue(suggestion.place_name);
                  address.setSuggestions([]);
                  handleSearchResult(suggestion.center);
                  console.log(suggestion.center);
                }}
              >
                {suggestion.place_name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputField;
