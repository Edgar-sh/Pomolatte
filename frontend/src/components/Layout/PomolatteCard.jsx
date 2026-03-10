const PomolatteCard = ({ children }) => {
  return (
    <div className="@container max-w-2xl mx-auto bg-pomolatte-layout p-12 rounded-2xl">
      <div className="flex flex-col justify-center items-center gap-10">
        {children}
      </div>
    </div>
  );
};

export default PomolatteCard;
