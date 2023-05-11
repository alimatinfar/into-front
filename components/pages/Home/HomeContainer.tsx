import {Types} from "@/types/types";

type Props = {
  children: Types["children"];
  className?: string;
  id?: string;
}

function HomeContainer({children, className, id}: Props) {
  return (
    <div
      {...id ? {id} : {}}
      className={`px-48 ${className}`}
    >
      {children}
    </div>
  );
}

export default HomeContainer;