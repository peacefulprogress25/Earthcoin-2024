export default function Video({ src, ...props }) {
  return (
    <video src={src} controls={false} autoPlay playsInline loop {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
