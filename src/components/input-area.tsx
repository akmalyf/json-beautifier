import {Textarea} from "@/components/ui/textarea";
import {fontFira} from "@/lib/fonts";
import {ChangeEventHandler} from "react";

interface InputAreaProps {
    fontSize: number[]
    value: string,
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

export function InputArea({ fontSize, value, onChange }: InputAreaProps) {
    return(
        <Textarea
            style={{ fontSize: `${fontSize[0]}px`, lineHeight: `${fontSize[0] * 1.5}px` }}
            placeholder="Paste your messy JSON here!"
            className={`h-full min-h-[300px] md:min-h-[400px] lg:min-h-[700px] ${fontFira.variable}`}
            value={value}
            onChange={onChange}
        />
    )
}
