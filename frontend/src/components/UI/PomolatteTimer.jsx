const PomolatteTimer = ({ minutes, seconds }) => {
  const min = minutes !== undefined ? minutes : "00";
  const sec = seconds !== undefined ? seconds : "00";
  return (
    <time className="text-8xl text-pomolatte-text font-lato font-extrabold">
      {min}:{sec}
    </time>
  );
};
export default PomolatteTimer;
