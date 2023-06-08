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
      className={`px-5 xs:px-10 sm:px-20 lg:px-24 xl:px-[108px] 2xl:px-44 ${className}`}
    >
      {children}
    </div>
  );
}

export default HomeContainer;