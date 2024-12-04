const Keyboard = ({ highlightedKeys }) => {
  const keyboardLayout = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
    ],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Control", "Alt", "Space", "Alt"],
  ];

  return (
    <div className="flex flex-col align-middle justify-start gap-2">
      {keyboardLayout.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row align-middle justify-center gap-2"
        >
          {row.map((key, keyIndex) => (
            <div
              key={keyIndex}
              className={`bg-slate-700 ${
                highlightedKeys.includes(key) ? "bg-primary" : ""
              } text-slate-400 text-2xl h-10 w-fit min-w-8 text-center rounded-md padding-2 `}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
