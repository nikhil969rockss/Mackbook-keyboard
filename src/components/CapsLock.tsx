"use client";
import CapsCircle from "./CapsCircle";
import Button from "./Button";
import { useState } from "react";

const CapsLock = () => {
  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(!active)} className="flex-1">
      <Button
        buttonSymbol={<CapsCircle active={active} />}
        className="!w-full min-w-[80px] items-start justify-end gap-2"
      >
        caps lock
      </Button>
    </div>
  );
};

export default CapsLock;
