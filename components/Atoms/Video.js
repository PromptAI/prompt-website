export default function Video({ src, ...rest }) {
  return (
    <div {...rest}>
      <video
        muted
        height="100%"
        width="100%"
        src={src}
        controls
        style={{ height: "100%", width: "100%" }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
