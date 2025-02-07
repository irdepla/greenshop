interface MainButtonProps {
    text?: string;
    icon?: string;
    className?: string;
  }

const MainButton = ({ text, icon, className }: MainButtonProps) => {
    return (
      <button className={`flex gap-1 rounded-md py-[7px] px-[17px] items-center bg-main font-medium text-white ${className}`}>
        {icon && (
          <span>
            <img src={icon} alt="button icon" />
          </span>
        )}
        <span className="font-medium">{text}</span>
      </button>
    );
  };
  
  export default MainButton;
  