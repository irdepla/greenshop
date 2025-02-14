interface MainButtonProps {
    text?: string;
    icon?: string;
    className?: string;
    onClick?: () => void;
  }

const MainButton = ({ text, icon, className, onClick }: MainButtonProps) => {
    return (
      <button 
      onClick={onClick}
      className={`flex gap-1 rounded-md py-[7px] px-[17px] items-center bg-main font-medium text-white ${className}`}>
        {icon && (
          <span className="">
            <img src={icon} alt="button icon" />
          </span>
        )}
        <span className="font-medium">{text}</span>
      </button>
    );
  };
  
  export default MainButton;
  