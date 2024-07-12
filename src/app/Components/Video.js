export default function Video({ src, ...props }) {
  return (
    <video
      src={src}
      controls={false}
      autoPlay
      playsInline
      loop
      muted
      {...props}
    ></video>
  );
}
