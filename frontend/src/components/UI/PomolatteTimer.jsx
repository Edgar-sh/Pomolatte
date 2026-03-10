const PomolatteTimer = ({ minutes, seconds }) => {
  const min = String(minutes ?? "0").padStart(2, 0);
  const sec = String(seconds ?? "0").padStart(2, 0);
  return (
    <time className="text-9xl text-pomolatte-text font-lato font-extrabold">
      {min}:{sec}
    </time>
  );
};
export default PomolatteTimer;
