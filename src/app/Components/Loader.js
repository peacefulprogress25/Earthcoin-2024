import { LoadingOutlined } from "@ant-design/icons";
export function BtnLoader() {
  return <LoadingOutlined spin delay={500} className="text-white" />;
}
export function Loader() {
  return (
    <LoadingOutlined spin delay={500} className="text-6xl text-[#EC8000]" />
  );
}
