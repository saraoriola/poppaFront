import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollButton = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  };

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
