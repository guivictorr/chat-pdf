import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { FileIcon } from "lucide-react";

export function Sidebar() {
  return (
    <Collapsible
      defaultOpen
      className="group flex h-full data-[state='closed']:w-fit data-[state='open']:pl-4 w-1/6"
    >
      <CollapsibleContent asChild>
        <ul className="flex flex-col items-start justify-start grow h-full p-3 gap-2 border hover:border-muted-foreground transition rounded-md overflow-y-auto">
          {Array.from({ length: 10 }, (_, i) => (
            <li
              key={i}
              className="flex items-center gap-2 w-full p-2 hover:bg-muted cursor-pointer rounded-md"
            >
              <FileIcon className="w-4 h-4" />
              PDF{i}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
      <TooltipProvider>
        <Tooltip>
          <CollapsibleTrigger className="group/trigger h-fit my-auto" asChild>
            <TooltipTrigger className="py-8 px-4 group">
              <div className="flex flex-col">
                <div className="transition h-3 w-1 rounded-full bg-muted-foreground group-hover/trigger:bg-white group-data-[state='open']/trigger:group-hover/trigger:rotate-[15deg] group-data-[state='closed']:-rotate-[15deg] translate-y-[.15rem]" />
                <div className="transition h-3 w-1 rounded-full bg-muted-foreground group-hover/trigger:bg-white group-data-[state='open']/trigger:group-hover/trigger:-rotate-[15deg] group-data-[state='closed']:rotate-[15deg] translate-y-[-0.15rem]" />
              </div>
            </TooltipTrigger>
          </CollapsibleTrigger>
          <TooltipContent sideOffset={10} side="right">
            <span className="group-data-[state='open']:block hidden">
              Close sidebar
            </span>
            <span className="group-data-[state='closed']:block hidden">
              Open sidebar
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Collapsible>
  );
}
