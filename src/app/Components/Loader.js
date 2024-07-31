import { LoadingOutlined } from "@ant-design/icons";
export function BtnLoader({ className }) {
  return (
    <LoadingOutlined spin delay={500} className={`text-white ${className}`} />
  );
}
export function Loader() {
  return (
    <LoadingOutlined spin delay={500} className='text-6xl text-[#EC8000]' />
  );
}
