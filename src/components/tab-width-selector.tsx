"use client";

import * as React from "react";
import {Label} from "@/components/ui/label";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {TabSpaceType} from "@/data/tab-space";

interface TabWidthProps {
  space: TabSpaceType[];
  onSelect: (value: string) => void;
}

export function TabWidthSelector({ space, onSelect }: TabWidthProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="tab-width">Tab Width</Label>
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-full" id="tab-width" aria-label="Tab Width Selector">
          <SelectValue placeholder="2 Space" />
        </SelectTrigger>
        <SelectContent>
          {space.map((item, index) => {
            return (
              <SelectItem key={index.toString()} value={item.tab.toString()}>
                {item.title}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
