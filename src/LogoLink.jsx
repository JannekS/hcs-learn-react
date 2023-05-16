import "./LogoLink.css";

function LogoLink({ url, imgSrc, alt }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={imgSrc} className="logo" alt={alt} />
    </a>
  );
}

export default LogoLink;
