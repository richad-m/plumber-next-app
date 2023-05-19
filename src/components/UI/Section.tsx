import React, { ReactNode } from "react";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id}>
      {title && <h2>{title}</h2>}
      <div
        style={{
          width: "70px",
          background: "blue",
          height: "5px",
          margin: "24px",
        }}
      />
      <div className="py-3">{children}</div>
    </section>
  );
}

export default Section;
