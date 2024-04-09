import { LoadingOutlined } from "@ant-design/icons";
export function Loader() {
  return (
    <LoadingOutlined spin delay={500} className="text-6xl text-[#EC8000]" />
  );
}
