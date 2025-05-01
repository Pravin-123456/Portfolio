import React from "react";

const PageCount = ({ page }) => {
  return (
    <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 text-white text-xl md:text-3xl font-semibold z-50">
      0{page} / 05
    </div>
  );
};

export default PageCount;
