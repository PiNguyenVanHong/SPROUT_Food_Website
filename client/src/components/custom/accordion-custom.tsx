import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionCustomProps {
  title: string;
  children: React.ReactNode;
}

function AccordionCustom({ title, children }: AccordionCustomProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline text-base">{title}</AccordionTrigger>
        <AccordionContent className="pt-2 pb-8">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionCustom;
