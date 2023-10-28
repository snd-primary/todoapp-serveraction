import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

interface HelpPopoverProps {
  content: string;
  className?: string;
}

export const HelpPopover: React.FC<HelpPopoverProps> = ({
  content,
  className,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <QuestionMarkCircledIcon
          className={`${buttonVariants} transition-all text-muted mt-1 hover:text-primary w-4 h-4 cursor-pointer touch-auto ${className}`}
        />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <p className="font-sans font-thin text-sm leading-6">{content}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
