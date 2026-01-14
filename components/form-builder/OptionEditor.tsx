"use client";

import { Plus, Trash2 } from "lucide-react";
import { FieldOption } from "@/lib/types/form";

interface Props {
  options: FieldOption[];
  onChange: (options: FieldOption[]) => void;
}

export default function OptionEditor({ options, onChange }: Props) {
  const addOption = () => onChange([...options, { label: "", value: "" }]);

  const update = (index: number, key: keyof FieldOption, value: string) => {
    const updated = [...options];
    updated[index][key] = value;
    onChange(updated);
  };

  const remove = (index: number) => onChange(options.filter((_, i) => i !== index));

  return (
    <div style={{ marginLeft: 16 }}>
      <strong>Options</strong>
      {options.map((opt, i) => (
        <div key={i} style={{ display: "flex", gap: 8 }}>
          <input
            placeholder="Label"
            value={opt.label}
            onChange={(e) => update(i, "label", e.target.value)}
          />
          <input
            placeholder="Value"
            value={opt.value}
            onChange={(e) => update(i, "value", e.target.value)}
          />
          <button onClick={() => remove(i)}>
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button onClick={addOption}>
        <Plus size={16} /> Add option
      </button>
    </div>
  );
}
