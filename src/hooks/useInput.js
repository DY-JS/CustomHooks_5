import {useState} from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue(initialValue)
    }

    return {
        value, onChange, reset
    }
};

//////////////////////////////////////////// TS
// import {useState, ChangeEvent} from "react";

// export default function useInput(initialValue: any) {
//     const [value, setValue] = useState(initialValue);

//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value)
//     }

//     const reset = () => {
//         setValue(initialValue)
//     }

//     return {
//         value, onChange, reset
//     }
// };