"use client";
import { Typewriter } from "react-simple-typewriter";

interface Props {
    message: string;
}

export const MessageTypeWrite = ({message}:Props) => {
    return (
        <Typewriter
            words={[message]}
            typeSpeed={100}
            deleteSpeed={100}
            cursor
            loop
        />
    )
}
