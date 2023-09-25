import { Box, Button, CheckboxGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./TopButton.scss";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollButton = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  };

  console.log(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButton);

    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Box onClick={scrollToTop}>
          <Button className="btn-top">Top</Button>
        </Box>
      )}
    </>
  );
};

export default TopButton;
