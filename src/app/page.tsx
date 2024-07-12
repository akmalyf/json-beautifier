"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [formattedJson, setFormattedJson] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [tabSpace, setTabSpace] = useState<number>(2);
  const [isCopying, setIsCopying] = useState<boolean>(false);

  const data = "";

  useEffect(() => {
    if (isCopying) {
      setTimeout(() => {
        setIsCopying(false);
      }, 3000);
    }
  }, [isCopying]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
  };

  const handleFormatClick = () => {
    try {
      const json = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(json, null, tabSpace);
      setFormattedJson(formattedJson);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleCopyClipboard = async () => {
    setIsCopying(true);
    await navigator.clipboard.writeText(error ?? formattedJson);
  };

  return (
    <main className="flex min-h-screen flex-row gap-12 p-12">
      <div className="flex-1 min-h-full">
        <Textarea
          placeholder="Type your JSON here."
          className="flex h-full p-4"
          value={jsonInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button onClick={handleFormatClick}>Beautify</Button>
        <Button variant="secondary" onClick={handleFormatClick}>
          Validate
        </Button>
        <div className="mt-2">
          <Select onValueChange={(value) => setTabSpace(parseInt(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="2 Tab Space" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 Tab Space</SelectItem>
              <SelectItem value="3">3 Tab Space</SelectItem>
              <SelectItem value="4">4 Tab Space</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex-1 min-h-full relative">
        <Textarea
          readOnly
          placeholder="Result here."
          className={`flex h-full p-4 ${error ? "text-red-500" : "text-white"}`}
          value={error ?? formattedJson}
          onChange={handleInputChange}
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-4"
          onClick={handleCopyClipboard}
        >
          {isCopying ? (
            <CheckIcon className="h-5 w-5 text-white" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-white" />
          )}
        </Button>
      </div>
    </main>
  );
}
