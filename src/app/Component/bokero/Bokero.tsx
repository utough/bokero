import React from "react";
import Button from "../ui/Button";
import PictureFlame from "../ui/PictureFlame";

interface RandomImageViewProps {
  imageUrl: string;
  refreshImage: () => void;
}

const Bokeru = () => {
  return (
    <div>
      <div className="text-center mt-3">
        <Button title="次のボケロを表示する" />
      </div>
      <div>
        <PictureFlame />
      </div>
    </div>
  );
};

export default Bokeru;
