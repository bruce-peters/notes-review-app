const Keyboard = ({ pressedKey }) => {
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
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Right Shift"],
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
              className={` text-2xl h-10 w-fit min-w-8 text-center rounded-md padding-2 transition-all ${
                pressedKey?.toLowerCase() === key.toLowerCase()
                  ? "bg-primary text-white shadow-primary shadow-sm"
                  : "bg-slate-700 text-slate-400"
              }`}
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
