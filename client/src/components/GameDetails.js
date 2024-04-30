import React from "react";

const GameDetails = () => {
  const detailsInput = [
    {
      key: "totalPlayers",
      type: "select",
      options: [
        { key: 8, value: 8 },
        { key: 10, value: 10 },
      ],
      label: "Players",
      icon: "/assets/players.gif",
    },
    {
      key: "drawTime",
      type: "numeric",
      placeholder: "Time in seconds",
      label: "Draw time",
      icon: "/assets/drawtime.gif",
    },
    {
      key: "rounds",
      type: "select",
      options: [
        { key: 1, value: 1 },
        { key: 2, value: 2 },
        { key: 3, value: 3 },
      ],
      label: "Rounds",
      icon: "/assets/rounds.gif",
    },
    {
      key: "wordCount",
      type: "select",
      options: [
        { key: 1, value: 1 },
        { key: 2, value: 2 },
        { key: 3, value: 3 },
      ],
      label: "Word count",
      icon: "/assets/word-count.gif",
    },
    {
      key: "hintCount",
      type: "select",
      options: [
        { key: 0, value: 0 },
        { key: 1, value: 1 },
        { key: 2, value: 2 },
      ],
      label: "Hint Count",
      icon: "/assets/word-mode.gif",
    },
  ];
  return (
    <div className="w-full bg-gray-800 p-5 rounded">
      {detailsInput.map((item) => {
        switch (item.type) {
          case "select":
            return (
              <div key={item.key} className="flex justify-between pb-5 w-full">
                <div className="flex items-center">
                  <img src={item.icon} alt={item.key} />
                  <label htmlFor={item.key} className="text-white text-lg pl-2">
                    {item.label}
                  </label>
                </div>
                <select className="w-48 rounded" id={item.key}>
                  {item.options.map((optionItem) => {
                    return (
                      <option key={optionItem.key} value={optionItem.value}>
                        {optionItem.key}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          default:
            return (
              <div key={item.key} className="flex justify-between pb-5 w-full">
                <div className="flex items-center">
                  <img src={item.icon} alt={item.key} />
                  <label htmlFor={item.key} className="text-white text-lg pl-2">
                    {item.label}
                  </label>
                </div>
                <input
                  className="w-48 rounded"
                  type={item.type}
                  id={item.key}
                  placeholder={item.placeholder}
                />
              </div>
            );
        }
      })}
      <button className="w-full bg-green-500 text-white p-3">Start</button>
    </div>
  );
};

export default GameDetails;
