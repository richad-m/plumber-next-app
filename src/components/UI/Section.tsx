import React, { ReactNode } from "react";
import Separator from "./Separator";

function Section({
  id,
  title,
  children,
  titleClassName,
}: {
  id: string;
  title: string;
  children: ReactNode;
  titleClassName?: string;
}) {
  return (
    <section id={id} className="mt-0">
      {title && <h2 className={titleClassName}>{title}</h2>}
      <Separator />
      <div className="py-3 w-full">{children}</div>
    </section>
  );
}

export default Section;
