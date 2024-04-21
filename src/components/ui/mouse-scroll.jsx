const mouseScroll = () => {
  return (
    <div className="absolute bottom-2 left-2/4 -translate-x-2/4">
      <div className="w-[10px] px-[10px] py-[15px] h-[15px] md:h-[20px] border-2 border-white rounded-[25px] opacity-75 box-content flex justify-center">
        <div className="w-[5px] h-[10px] rounded-[25%] bg-white animate-scroll"></div>
      </div>
    </div>
  );
};

export default mouseScroll;
