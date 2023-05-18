import {Types} from "@/types/types";

type Props = {
  children: Types["children"];
  className: string;
}

export default function DarkContainer({children, className}: Props) {

  return (
    <div className={`bg-dark-4 rounded-3xl p-5 ${className}`}>
      {children}
    </div>
  );
}
