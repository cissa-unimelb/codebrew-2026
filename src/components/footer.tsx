import footerImage from '../assets/images2/footer.svg';

export default function Footer() {
    return (
      <img 
        src={footerImage} 
        alt="Locked decoration" 
        // Removed 'absolute bottom-0'
        // w-4/5 might look weird centered in flex, consider w-full or self-start
        className="w-4/5 h-auto block object-bottom z-0"
      />
    );
}