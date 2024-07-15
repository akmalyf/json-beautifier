"use client";

import { Metadata } from "next";
import { TabWidthSelector } from "@/components/tab-width-selector";
import { FontSizeSelector } from "@/components/font-size-selector";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { space } from "@/data/tab-space";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { BookText, BookType, Columns2 } from "lucide-react";
import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import { InputArea } from "@/components/input-area";
import { OutputArea } from "@/components/output-area";

export default function Page() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [tabSpace, setTabSpace] = useState<number>(2);
  const [fontSize, setFontSize] = useState<number[]>([14]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleBeautify = () => {
    try {
      const json = JSON.parse(input);
      const formattedJson = JSON.stringify(json, null, tabSpace);
      setOutput(formattedJson);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="hidden h-full flex-col md:flex">
      <Tabs defaultValue="input-output" className="flex-1">
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
              <Button
                onClick={handleBeautify}
                variant="primary"
                size="lg"
                className="justify-between px-4"
              >
                <span>Beautify ✨</span>
                <ArrowRightIcon className="size-3" />
              </Button>
              <div className="grid gap-2 pt-2">
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Mode
                </span>
                <TabsList className="h-11 grid grid-cols-3">
                  <TabsTrigger value="input-only">
                    <span className="sr-only">Input Column</span>
                    <BookType />
                  </TabsTrigger>
                  <TabsTrigger value="input-output">
                    <span className="sr-only">I/O Column</span>
                    <Columns2 />
                  </TabsTrigger>
                  <TabsTrigger value="output-only">
                    <span className="sr-only">Output Column</span>
                    <BookText />
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabWidthSelector space={space} onSelect={(value) => setTabSpace(parseInt(value))}/>
              <FontSizeSelector onChange={setFontSize} value={fontSize} />
            </div>
            <div className="md:order-1">
              <TabsContent value="input-only" className="mt-0 border-0 p-0">
                <div className="flex flex-col space-y-4">
                  <InputArea
                      fontSize={fontSize}
                      value={input}
                      onChange={handleInputChange}
                  />
                </div>
              </TabsContent>
              <TabsContent value="input-output" className="mt-0 border-0 p-0">
                <div className="flex flex-col space-y-4">
                  <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                    <InputArea
                        fontSize={fontSize}
                        value={input}
                        onChange={handleInputChange}
                    />
                    <OutputArea
                        fontSize={fontSize}
                        value={error ?? output}
                        error={!!error}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="output-only" className="mt-0 border-0 p-0">
                <div className="flex flex-col space-y-4">
                  <OutputArea
                      fontSize={fontSize}
                      value={error ?? output}
                      error={!!error}
                  />
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
