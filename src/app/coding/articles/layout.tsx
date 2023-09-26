import classes from "./layout.module.scss";

import ArticklesSubHeading from "@/sections/coding/articles/subHeading/ArticklesSubHeading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classes["container"]}>
      <ArticklesSubHeading />
      {children}
    </div>
  );
}
