import { useState, useRef, useEffect } from "react";

const InputOTP = ({ length = 4, onComplete, ...props }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [timeLeft, setTimeLeft] = useState(props?.timer || 120);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((num) => num !== "")) {
      onComplete?.(newOtp.join(""));
    }

    props?.setVerifyBtn?.(newOtp.join("").length === 4);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    if (timeLeft === 0) {
      props?.resendOTP();
      setOtp(new Array(length).fill(""));
      setTimeLeft(props?.timer || 120);
    }
  };

  return (
    <div className="grid justify-items-center gap-5 md:gap-10">
      {props?.phoneNo && (
        <span className="flex items-center gap-1 text-sm2 font-normal text-light-text-color">
          We have sent an OTP on
          <p className="font-medium">+91 {props.phoneNo}</p>
        </span>
      )}

      <div className="flex justify-center gap-5 md:gap-10">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-12 md:w-[72px] h-12 md:h-[72px] text-center border border-gray-200 rounded-xs-8 text-base md:text-lg text-text-color font-medium"
          />
        ))}
      </div>

      <span
        className={`flex items-center gap-2 cursor-pointer text-sm md:text-sm2 font-semibold ${timeLeft > 0 ? "text-disabled-text" : "text-secondary-color"}`}
        onClick={handleResendOTP}
      >
        Resend OTP
        <p className="font-medium text-text-color cursor-default">
          {`${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`}
        </p>
      </span>
    </div>
  );
};

export default InputOTP;
