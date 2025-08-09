import Button from "@/components/Button";
import CapsLock from "@/components/CapsLock";
import Container from "@/components/Container";
import KeyboradLayout from "@/components/KeyboradLayout";
import {
  keyBoardKeysRow1,
  keyboardKeysRow2,
  keyboardKeysRow3,
  keyboardKeysRow4a,
  keyboardKeysRow4b,
  numberkeys,
} from "@/constants";

export default function Home() {
  return (
    <Container>
      {/* //TODO: Add scrren here */}
      <KeyboradLayout className="mt-40">
        <div className="flex items-center gap-2">
          {numberkeys.map((numberKey) => (
            <Button
              key={numberKey.buttonText}
              buttonSymbol={numberKey.buttonSymbol}
            >
              {numberKey.buttonText}
            </Button>
          ))}
          <Button className="min-w-[70px] flex-1 items-end justify-end">
            delete
          </Button>
        </div>
        {/* keyboard Row one */}
        <div className="flex items-center gap-2">
          <Button className="min-w-[70px] flex-1 items-start justify-end">
            tab
          </Button>
          {keyBoardKeysRow1.map((key) => (
            <Button key={key.buttonText} buttonSymbol={key.buttonSymbol}>
              {key.buttonText}
            </Button>
          ))}
        </div>

        {/* keybord Row 2 */}

        <div className="flex items-center gap-2">
          <CapsLock />
          {keyboardKeysRow2.map((key) => (
            <Button key={key.buttonText} buttonSymbol={key.buttonSymbol}>
              {key.buttonText}
            </Button>
          ))}
          <Button className="min-w-[80px] flex-1 items-end justify-end">
            return
          </Button>
        </div>

        {/* keybord Row 3 */}

        <div className="flex items-center gap-2">
          <Button className="min-w-[100px] flex-1 items-end justify-end">
            shift
          </Button>
          {keyboardKeysRow3.map((key) => (
            <Button buttonSymbol={key.buttonSymbol} key={key.buttonText}>
              {key.buttonText}
            </Button>
          ))}
          <Button className="min-w-[100px] flex-1 items-end justify-end">
            shift
          </Button>
        </div>
        <div className="flex items-center gap-2">
          {keyboardKeysRow4a.map((key) => (
            <Button
              className={`${key.buttonText === "fn" && "items-start justify-end"} items-end`}
              key={key.buttonText}
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
                buttonSymbol={key.buttonSymbol}
              >
                {key.buttonText}
              </Button>
            );
          })}
          <Button className="min-w-[200px] flex-1">&nbsp;&nbsp;</Button>
          {keyboardKeysRow4b
            .map((key) => {
              return (
                <Button
                  className={`${key.buttonText === "command" && "w-[90px] max-lg:w-[60px]"} items-start`}
                  key={key.buttonText}
                  buttonSymbol={key.buttonSymbol}
                >
                  {key.buttonText}
                </Button>
              );
            })
            .reverse()}
          <Button className="s">&larr;</Button>
          <div className="flex flex-col gap-1">
            <Button className="h-[30px] w-[60px] max-lg:h-[25px] max-lg:w-[50px]">
              &uarr;
            </Button>
            <Button className="h-[30px] w-[60px] max-lg:h-[25px] max-lg:w-[50px]">
              &darr;
            </Button>
          </div>
          <Button>&rarr;</Button>
        </div>
      </KeyboradLayout>
    </Container>
  );
}
