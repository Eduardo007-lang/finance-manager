"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Controller } from "react-hook-form";
import { formatDate } from "date-fns";


interface Props {
  control: any;
  name?: string;
  rules?: object;
}


export function CalendarInput({ control, name, rules }: Props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="relative gap-2">
        <Controller
          name={name ?? "date"}
          control={control}
          rules={rules}
          render={({ field, fieldState }) => (
            <>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      if (date) {
                        field.onChange(formatDate(date, "yyyy-MM-dd"));
                        setDate(date);
                      }
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              {fieldState.error && (
                <p className="text-red-500">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}
