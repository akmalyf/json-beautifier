import {Textarea} from "@/components/ui/textarea";
import {fontFira} from "@/lib/fonts";
import {CheckIcon, ClipboardIcon} from "@heroicons/react/24/outline";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

interface OutputAreaProps {
    fontSize: number[]
    value: string,
    error: boolean
}

export function OutputArea({ fontSize, value, error }: OutputAreaProps) {
    const [isCopying, setIsCopying] = useState<boolean>(false);

    const handleCopyClipboard = async () => {
        setIsCopying(true);
        await navigator.clipboard.writeText(value);
    };

    useEffect(() => {
        if (isCopying) {
            setTimeout(() => {
                setIsCopying(false);
            }, 3000);
        }
    }, [isCopying]);

    return(
        <div className="relative">
            <Textarea
                readOnly
                style={{ fontSize: `${fontSize[0]}px`, lineHeight: `${fontSize[0] * 1.5}px` }}
                placeholder="Here is your beautiful JSON."
                className={`${error ? "text-red-500" : ""}  bg-muted dark:bg-muted h-full min-h-[300px] md:min-h-[400px] lg:min-h-[700px] ${fontFira.variable}`}
                value={value}
                aria-label="Output JSON"
            />
            <Button
                variant="secondary"
                size="icon"
                className="absolute right-1 top-1 hover:bg-white dark:hover:bg-zinc-950"
                onClick={handleCopyClipboard}
                aria-label="Copy Json"
            >
                {isCopying ? (
                    <CheckIcon className="h-5 w-5 text-black dark:text-white" />
                ) : (
                    <ClipboardIcon className="h-5 w-5 text-black dark:text-white" />
                )}
            </Button>
        </div>
    )
}
