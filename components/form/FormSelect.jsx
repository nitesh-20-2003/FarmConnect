"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// type FormSelectProps {
//   type: string;
//   label: string;
//   name: string;
//   list: string[]; // Dynamic list of strings
//   size: string;
//   defaultValue?: string;
// }

export function FormSelect({
  type,
  label,
  name,
  list,
  size,
  defaultValue = "",
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);
  // console.log(list);

  return (
    <div className="mb-2">
      <div className="ml-4">
        <Label htmlFor={name} className="capitalize">
          {label || name}
        </Label>
      </div>

      <div className="mt-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value || (list?.length ? list[0] : "")}{" "}
              {/* Display selected item */}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={` ${label}...`} />
              <CommandList>
                <CommandEmpty>No {label} found.</CommandEmpty>
                <CommandGroup>
                  {list &&
                    list.map((item) => (
                      <CommandItem
                        key={item}
                        value={item}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {item} {/* Display the string directly */}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === item ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
