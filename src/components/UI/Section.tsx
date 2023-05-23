import React, { ReactNode } from "react";

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
      <div
        style={{
          width: "70px",
          background: "#D9A962",
          height: "5px",
          margin: "24px",
        }}
      />
      <div className="py-3 w-full">{children}</div>
    </section>
  );
}

export default Section;
