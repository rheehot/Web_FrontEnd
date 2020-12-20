import { useFormInput } from "@cooksmelon/event";
import React, { useCallback, useRef, useState } from "react";
import WriteForm from "../../components/write/WriteForm";

const index = () => {
    // img 업로드
    const imgInput = useRef<HTMLInputElement>(null!);

    const handleImg = useCallback(() => {
        const input = imgInput.current;
        input.click();
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            const files = target.files;
            console.log(files);
        };
    }, []);

    // 거주기간 날짜 선택
    const [startDate, setStartDate] = useState(new Date());
    const handelSelectDate = useCallback((data: Date) => {
        setStartDate(() => data);
    }, []);

    // 작성 form data
    const [form, handleFormChange] = useFormInput();

    console.log(startDate);
    console.log(form);

    return (
        <WriteForm
            imgInput={imgInput}
            startDate={startDate}
            handleFormChange={handleFormChange}
            handleImg={handleImg}
            handelSelectDate={handelSelectDate}></WriteForm>
    );
};

export default index;
