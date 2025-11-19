import {Button} from "./button";
import { useRef, useState, useEffect } from "react";

export const Otp = ({number}) => {
    const ref = useRef(Array(number).fill(0));
    const [values, setValues] = useState(Array(number).fill(""));
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(values.some(v => v === ""));
    }, [values]);

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-row">
                {values.map((v, index) => (
                    <SubOtpBox
                        key={index}
                        reference={(e) => (ref.current[index] = e)}
                        onChange={(digit) => {
                            const temp = [...values];
                            temp[index] = digit;
                            setValues(temp);
                        }}
                        onDone={() => index + 1 < number && ref.current[index + 1].focus()}
                        goBack={() => index > 0 && ref.current[index - 1].focus()}
                    />
                ))}
            </div>

            <Button disabled={disabled}>Sign up</Button>
        </div>
    );
}


const SubOtpBox = ({ reference, onDone, goBack, onChange }) => {
    const [inputBoxVal, setInputBoxVal] = useState("");

    return (
        <input
            value={inputBoxVal}
            ref={reference}
            type="text"
            maxLength={1}
            className="m-1 w-[42px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white text-center"
            onKeyDown={(e) => {
                if (e.key === "Backspace" && inputBoxVal === "") {
                    goBack();
                }
            }}
            onChange={(e) => {
                const val = e.target.value;

                if (/^[0-9]$/.test(val)) {
                    setInputBoxVal(val);
                    onChange(val);
                    onDone();       // MOVE FORWARD
                } else {
                    setInputBoxVal("");
                    onChange("");
                }
            }}
        />
    );
};
