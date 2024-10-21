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
    <Breadcrumb className="ml-2 lg:ml-0 mb-6">
      <BreadcrumbList className="text-[13px] lg:text-sm">
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
            <BreadcrumbItem key={index} className="w-20 line-clamp-1 lg:w-40">
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbCustom;
