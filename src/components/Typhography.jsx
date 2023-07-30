import cx from "classnames";

const Typography = (props) => {
    const  { children, variant, size} = props
    return (
        
        <p className={
            cx("text-[#152A46]", 
            {
                "text-red-500": variant === "error",
                "text-green-500": variant === "success",
                "text-blue-500": variant === "info",
                "text-white": variant === "primary",
                "text-[#FFCD29]": variant === "alert",
                "text-slate-950": variant === "black",
                "text-[20px] font-semibold": size === "title",
                "text-[16px]": size === "subtitle",
                "text-[12px]": size === "body",
            }
        )}>
            {children}
        </p>
    );
}

export default Typography;