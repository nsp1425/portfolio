const Language = ({ language }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-lg font-semibold rounded-lg border-2 border-transparent bg-gradient-to-br from-pink-500 to-blue-500 p-[2px] w-full h-auto aspect-square sm:w-[200px] sm:h-[125px]">
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#0F172A] rounded-lg">
        <div>{language.icon}</div>
        <div className="text-xl">{language.name}</div>
      </div>
    </div>
  );
};

export default Language;
