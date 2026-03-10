const Header = () => {
  return (
    <div className="relative h-24 w-full bg-pomolatte-layout flex items-center justify-between">
      <div className="flex mx-auto">
        <img
          alt="Logo Pomolatte"
          src="./icon_pomolatte.png"
          className="h-24 w-auto"
        />
      </div>
      <div className="flex mx-auto items-center gap-4">
        <img
          alt="Icon Settings"
          src="gear_settings.png"
          className="h-10 w-auto cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Header;
