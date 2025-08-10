"use client";
import Button from "@/components/Button";
import CapsLock from "@/components/CapsLock";
import Container from "@/components/Container";
import KeyboradLayout from "@/components/KeyboradLayout";
import Navbar from "@/components/Navbar";
import {
  keyBoardKeysRow1,
  keyboardKeysRow2,
  keyboardKeysRow3,
  keyboardKeysRow4a,
  keyboardKeysRow4b,
  numberkeys,
} from "@/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const [overlay, setOverlay] = useState(false);

  // Use of keyboard stroke
  useEffect(() => {
    if (overlay) return;
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key.toLowerCase() === "tab") {
        e.preventDefault(); // Prevent default tab behavior
      }
      if (e.code.toLowerCase() === "shiftleft") {
        const leftShiftKey = "L-Shift";
        setPressedKeys((prev) =>
          prev.includes(leftShiftKey) ? prev : [...prev, leftShiftKey],
        );
        return;
      }
      if (e.code.toLowerCase() === "metaleft") {
        const leftCommand = "L-Command";
        setPressedKeys((prev) =>
          prev.includes(leftCommand) ? prev : [...prev, leftCommand],
        );
        return;
      }
      if (e.code.toLowerCase() === "altleft") {
        const leftControl = "L-Option";
        setPressedKeys((prev) =>
          prev.includes(leftControl) ? prev : [...prev, leftControl],
        );
        return;
      }

      let key = e.key.toLowerCase();
      if (key === "meta") {
        key = "R-Command";
      }
      if (key === "alt") {
        key = "R-Option";
      }
      if (key === "shift") {
        key = "R-Shift";
      }
      if (key === " ") {
        key = "Space";
      }

      setPressedKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
    };
    const handleKeyUp = (e: globalThis.KeyboardEvent) => {
      if (e.code.toLowerCase() === "shiftleft") {
        const leftShiftKey = "L-Shift";
        setPressedKeys((prev) => prev.filter((k) => k !== leftShiftKey));
        return;
      }
      if (e.code.toLowerCase() === "altleft") {
        const leftControl = "L-Option";
        setPressedKeys((prev) => prev.filter((k) => k !== leftControl));
        return;
      }
      if (e.code.toLowerCase() === "metaleft") {
        const leftCommand = "L-Command";
        setPressedKeys((prev) => prev.filter((k) => k !== leftCommand));
        return;
      }
      let key = e.key.toLowerCase();
      if (key === "meta") {
        key = "R-Command";
      }
      if (key === "alt") {
        key = "R-Option";
      }
      if (key === "shift") {
        key = "R-Shift";
      }
      if (key === " ") {
        key = "Space";
      }

      setPressedKeys((prev) => prev.filter((k) => k !== key));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const addOverlay = async () => {
      if (window.innerWidth < 768) {
        console.log("chala");
        setOverlay(true);
        return;
      }
      setOverlay(false);
    };
    window.addEventListener("resize", addOverlay);
    addOverlay();
    return () => window.removeEventListener("resize", addOverlay);
  }, [overlay]);

  return (
    <Container className="relative">
      {overlay && (
        <div className="overlay absolute inset-0 flex items-center justify-center bg-black/60 text-center text-white/60 backdrop-blur-sm">
          Best view on tablet or Desktop <br />
          kindly change your device
        </div>
      )}
      <Navbar />

      <Container className="flex h-[20vh] items-center justify-center text-[max(3vw,30px)] font-[900] capitalize">
        {pressedKeys}
      </Container>

      <KeyboradLayout className="mt-4">
        <div className="flex items-center gap-2">
          {numberkeys.map((numberKey) => (
            <Button
              key={numberKey.buttonText}
              buttonSymbol={numberKey.buttonSymbol}
              keyValue={numberKey.buttonText.toLowerCase()}
              isActive={pressedKeys.includes(
                numberKey.buttonText.toLowerCase(),
              )}
            >
              {numberKey.buttonText}
            </Button>
          ))}
          <Button
            keyValue={"backspace"}
            isActive={pressedKeys.includes("backspace")}
            className="min-w-[70px] flex-1 items-end justify-end"
          >
            delete
          </Button>
        </div>
        {/* keyboard Row one */}
        <div className="flex items-center gap-2">
          <Button
            keyValue="tab"
            isActive={pressedKeys.includes("tab")}
            className="min-w-[70px] flex-1 items-start justify-end"
          >
            tab
          </Button>
          {keyBoardKeysRow1.map((key) => (
            <Button
              key={key.buttonText}
              buttonSymbol={key.buttonSymbol}
              keyValue={key.buttonText.toLowerCase()}
              isActive={pressedKeys.includes(key.buttonText.toLowerCase())}
            >
              {key.buttonText}
            </Button>
          ))}
        </div>

        {/* keybord Row 2 */}

        <div className="flex items-center gap-2">
          <CapsLock isActive={pressedKeys.includes("capslock")} />
          {keyboardKeysRow2.map((key) => (
            <Button
              keyValue={key.buttonText.toLowerCase()}
              isActive={pressedKeys.includes(key.buttonText.toLowerCase())}
              key={key.buttonText}
              buttonSymbol={key.buttonSymbol}
            >
              {key.buttonText}
            </Button>
          ))}
          <Button
            keyValue={"enter"}
            isActive={pressedKeys.includes("enter")}
            className="min-w-[80px] flex-1 items-end justify-end"
          >
            return
          </Button>
        </div>

        {/* keybord Row 3 */}

        <div className="flex items-center gap-2">
          <Button
            keyValue="shift"
            isActive={pressedKeys.includes("L-Shift")}
            className="min-w-[100px] flex-1 items-end justify-end"
          >
            shift
          </Button>
          {keyboardKeysRow3.map((key) => (
            <Button
              keyValue={key.buttonText.toLowerCase()}
              isActive={pressedKeys.includes(key.buttonText.toLowerCase())}
              buttonSymbol={key.buttonSymbol}
              key={key.buttonText}
            >
              {key.buttonText}
            </Button>
          ))}
          <Button
            keyValue={"shift"}
            isActive={pressedKeys.includes("R-Shift")}
            className="min-w-[100px] flex-1 items-end justify-end"
          >
            shift
          </Button>
        </div>
        <div className="flex items-center gap-2">
          {keyboardKeysRow4a.map((key) => (
            <Button
              className={`${key.buttonText === "fn" && "items-start justify-end"} items-end`}
              key={key.buttonText}
              keyValue={key.buttonText.toLowerCase()}
              isActive={pressedKeys.includes(key.buttonText.toLowerCase())}
              buttonSymbol={key.buttonSymbol}
            >
              {key.buttonText}
            </Button>
          ))}
          {keyboardKeysRow4b.map((key) => {
            return (
              <Button
                className={`${key.buttonText === "command" && "w-[90px] max-lg:w-[60px]"} items-end`}
                key={key.buttonText}
                keyValue={
                  key.buttonText === "command" ? "L-Command" : "L-Option"
                }
                isActive={pressedKeys.includes(
                  key.buttonText === "command" ? "L-Command" : "L-Option",
                )}
                buttonSymbol={key.buttonSymbol}
              >
                {key.buttonText}
              </Button>
            );
          })}
          <Button
            keyValue="Space"
            isActive={pressedKeys.includes("Space")}
            className="min-w-[200px] flex-1"
          >
            &nbsp;&nbsp;
          </Button>
          {keyboardKeysRow4b
            .map((key) => {
              return (
                <Button
                  className={`${key.buttonText === "command" && "w-[90px] max-lg:w-[60px]"} items-start`}
                  key={key.buttonText}
                  buttonSymbol={key.buttonSymbol}
                  keyValue={
                    key.buttonText === "command" ? "R-Command" : "R-Option"
                  }
                  isActive={pressedKeys.includes(
                    key.buttonText === "command" ? "R-Command" : "R-Option",
                  )}
                >
                  {key.buttonText}
                </Button>
              );
            })
            .reverse()}
          <Button
            keyValue="arrowleft"
            isActive={pressedKeys.includes("arrowleft")}
          >
            &larr;
          </Button>
          <div className="flex flex-col gap-1">
            <Button
              className="h-[30px] w-[60px] max-lg:h-[25px] max-lg:w-[50px]"
              keyValue="arrowup"
              isActive={pressedKeys.includes("arrowup")}
            >
              &uarr;
            </Button>
            <Button
              className="h-[30px] w-[60px] max-lg:h-[25px] max-lg:w-[50px]"
              keyValue="arrowdown"
              isActive={pressedKeys.includes("arrowdown")}
            >
              &darr;
            </Button>
          </div>
          <Button
            keyValue="arrowright"
            isActive={pressedKeys.includes("arrowright")}
          >
            &rarr;
          </Button>
        </div>
      </KeyboradLayout>
    </Container>
  );
}
