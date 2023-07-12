import StyledSearchbar from "./Searchbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Searchbar() {
  const [showInput, setShowInput] = useState(false);

  return (
    <StyledSearchbar showInput={showInput}>
      <input type="search" placeholder="O que você procura?" />
      <span>
        {!showInput && (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="white"
            size="1x"
            bounce
            onClick={() => setShowInput(true)}
          />
        )}
        {showInput && (
          <FontAwesomeIcon
            icon={faXmark}
            color="white"
            size="1x"
            onClick={() => setShowInput(false)}
          />
        )}
      </span>
    </StyledSearchbar>
  );
}
