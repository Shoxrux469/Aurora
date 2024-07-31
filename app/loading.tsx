import { Progress } from "@/components/ui/progress";
import React from "react";

const Loading = ({ value }: { value?: number }) => {
  return ( 
    <div>
      <Progress value={value} />
    </div>
  );
};

export default Loading;
