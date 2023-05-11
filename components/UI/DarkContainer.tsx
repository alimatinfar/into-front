import {Types} from "@/types/types";

type Props = {
  children: Types["children"];
  className: string;
}

export default function DarkContainer({children, className}: Props) {

  return (
    <div className={`bg-dark-2/30 rounded-3xl p-10 aspect-square ${className}`}>
      {children}
    </div>
  );
}
