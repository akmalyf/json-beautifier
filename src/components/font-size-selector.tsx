"use client";

import {SliderProps} from "@radix-ui/react-slider";
import * as React from "react";

import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";

interface FontSizeSelectorProps {
  value: SliderProps["defaultValue"];
  onChange: (value: number[]) => void;
}

export function FontSizeSelector({ value, onChange }: FontSizeSelectorProps) {

  return (
    <div className="grid gap-4 pt-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="font-size">Font Size</Label>
        <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
          {value}
        </span>
      </div>
      <Slider
        id="font-size"
        max={20}
        min={6}
        value={value}
        step={1}
        onValueChange={onChange}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        aria-label="Font Size Selector"
      />
    </div>
  );
}
