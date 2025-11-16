import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button size="small" shape="rounded-sm" text="Help" />
      <Button size="medium" shape="rounded-md" text="Help" />
      <Button size="large" shape="rounded-full" text="Help" />
    </div>
  );
};
export default Landing;
