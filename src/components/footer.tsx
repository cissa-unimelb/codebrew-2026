import footerImage from '../assets/images2/footer.svg';

export default function Footer() {
  return (
    <img
      src={footerImage}
      alt="Locked decoration"
      style={{ position: "absolute", bottom: 0, left: 0, maxWidth: "1000px" }}
      className="w-9/10 z-20"
    />
  );
}

