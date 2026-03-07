const PomolatteTitle = ({ modeTitle }) => {
  const titles = {
    POMODORO: "Pomodoro",
    SHORT_BREAK: "Short-Break",
    LONG_BREAK: "Long-Break",
  };

  const title = titles[modeTitle] ?? "Carregando";

  return <h1 className="font-borel text-pomolatte-text text-7xl">{title}</h1>;
};
export default PomolatteTitle;
