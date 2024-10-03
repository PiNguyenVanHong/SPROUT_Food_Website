import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbCustomProps {
  data: {
    link: string;
    label: string;
  }[];
}

function BreadcrumbCustom({ data }: BreadcrumbCustomProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {data.map((item, index) =>
          index !== data.length - 1 ? (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            </>
          ) : (
            <BreadcrumbItem key={index}>
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbCustom;
