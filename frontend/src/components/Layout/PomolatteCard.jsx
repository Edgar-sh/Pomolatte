import Button from "../UI/Button";

const PomolatteCard = () => {
  return (
    <div className="@container max-w-md mx-auto bg-pomolatte-layout p-4 ">
      <div className="flex flex-row @sm-md:flex-col justify-center items-center gap-3">
        <Button>Pomodoro</Button>
        <Button>Short-Break</Button>
        <Button>Lonng-Break</Button>
      </div>
    </div>
  );
};

export default PomolatteCard;
