import { useEffect, useRef } from "react";

const DisplayText = ({ text, cursorLocation }) => {
  const maxLines = 3;
  return (
    <div
      className={
        "flex flex-row font-mono flex-wrap pointer-events-none text-6xl whitespace-nowrap"
      }
    >
      {text.map((wordData, index) => (
        <>
          <Word
            wordData={wordData}
            key={"word" + index}
            wordCursorLocation={
              cursorLocation[0] === index ? cursorLocation[1] : -1
            }
            needsSpace={index !== text.length - 1}
          />
        </>
      ))}
    </div>
  );
};

const getColorFromStatus = (status) => {
  switch (status) {
    case "CORRECT":
      return "text-white";
    case "UNTYPED":
      return "text-slate-500";
    case "INCORRECT":
      return "text-red-500";
    case "EXTRA":
      return "text-red-950";
    default:
      return "";
  }
};

const Word = ({ wordData, wordCursorLocation, needsSpace }) => {
  // Create a copy of wordData to avoid mutating the original array
  const modifiedWordData = [...wordData];

  // Push a space to the array if needsSpace is true
  if (needsSpace) {
    modifiedWordData.push({ value: " ", status: "UNTYPED" });
  }

  return (
    <div className="flex flex-row">
      {modifiedWordData.map((letterData, index) => {
        return (
          <div className="relative" key={"letter" + index}>
            <Letter
              hasCursor={index === wordCursorLocation}
              letterText={letterData.value}
              status={letterData.status}
            />
          </div>
        );
      })}
    </div>
  );
};

const Letter = ({ letterText, status, hasCursor }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (hasCursor && cursorRef.current) {
      cursorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [hasCursor]);

  return (
    <>
      {hasCursor && (
        <span
          ref={cursorRef}
          className="absolute left-[0] top-0 h-full w-0.5 bg-white animate-ping"
        ></span>
      )}
      <span className={"inline-block w-[1ch] " + getColorFromStatus(status)}>
        {letterText}
      </span>
    </>
  );
};

export default DisplayText;
