// components/form/FormSelect.jsx
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

export function FormSelect({
  type,
  label,
  name,
  list,
  size,
  defaultValue = "",
}) {
  console.log(list);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className="mb-2">
      <div className="ml-2">
        <Label htmlFor={name} className="capitalize">
          {label || name}
        </Label>
      </div>
      <div className="mt-2">
        <input type="hidden" name={name} value={value} />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[150px] justify-between"
            >
              {value || (list?.length ? list[0] : "")}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[150px] p-0">
            <Command>
              <CommandInput placeholder={`${label}...`} />
              <CommandList>
                <CommandEmpty>No {label} found.</CommandEmpty>
                <CommandGroup>
                  {list &&
                    list.map((item) => (
                      <CommandItem
                        key={item}
                        value={item}
                        onSelect={() => {
                          setValue(item);
                          setOpen(false);
                        }}
                      >
                        {item}
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
