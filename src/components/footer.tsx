import footerImage from '../assets/images2/footer.svg';

export default function Footer() {
  return (
    <img 
      src={footerImage}
      alt="Locked decoration"
      style={{ position: "fixed", bottom: 0, left: 0 }}
      className="w-4/5 z-0"
    />
  );
}

