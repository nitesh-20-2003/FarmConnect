"use client";

import { Checkbox } from "@/components/ui/checkbox";
type CheckBoxParams = {
  name: string;
  
  label?: string;
  defaultValue?:boolean;
  size?: string;

};

export default function FormCheckbox(params: CheckBoxParams) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={params.name} />
      <label
        htmlFor={params.name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {params.label}
      </label>
    </div>
  );
}