import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AI_MODELS } from "@/mocks/data";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/store/chat-store";

export function ModelSelector() {
  const [open, setOpen] = useState(false);
  const { selectedModel, setSelectedModel } = useChatStore();
  const current = AI_MODELS.find((m) => m.id === selectedModel) ?? AI_MODELS[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" role="combobox" className="h-9 gap-2 rounded-xl border bg-background px-3 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-gradient-brand" />
          {current.name}
          <span className="text-xs text-muted-foreground">{current.provider}</span>
          <ChevronsUpDown className="ml-1 h-3.5 w-3.5 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search models..." />
          <CommandList>
            <CommandEmpty>No models found.</CommandEmpty>
            <CommandGroup>
              {AI_MODELS.map((m) => (
                <CommandItem key={m.id} onSelect={() => { setSelectedModel(m.id); setOpen(false); }} className="items-start gap-3 py-2.5">
                  <Check className={cn("mt-1 h-4 w-4", selectedModel === m.id ? "opacity-100" : "opacity-0")} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{m.name}</span>
                      {m.badge && <span className="rounded-full bg-gradient-brand px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-brand-foreground">{m.badge}</span>}
                    </div>
                    <div className="text-xs text-muted-foreground">{m.description}</div>
                  </div>
                  <span className="shrink-0 text-[10px] text-muted-foreground">{m.contextWindow}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
