import { Progress } from "@/components/ui/progress";

const Loading = ({ value }: { value?: number }) => {
  return ( 
    <div>
      <Progress value={value} />
    </div>
  );
};

export default Loading;