export default function Video({ src, ...rest }) {
  return (
    <div {...rest}>
      <video
        muted={true}
        height="100%"
        width="100%"
        src={src}
        controls
        style={{ height: "100%", width: "100%", objectFit: "fill" }}
        autoPlay
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
