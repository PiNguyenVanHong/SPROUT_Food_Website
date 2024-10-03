import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

interface CommandCustomProps {
  title: string;
  data: {
    value: string | number;
    label: string;
  }[];
}

function CommandCustom({ title, data }: CommandCustomProps) {
  return (
    <Command className="rounded-lg w-full bg-transparent">
      <CommandInput placeholder={title} />
      <CommandList>
        <ScrollArea className="w-full h-52">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {data.map((item, index) => (
              <CommandItem style={{ background: "transparent" }}>
                <div className="flex items-center space-x-6 mb-1">
                  <Checkbox id={index.toString()} value={item.value} />
                  <label
                    htmlFor={index.toString()}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </Command>
  );
}

export default CommandCustom;
