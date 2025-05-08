import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#121212] text-white py-6 px-4 z-50">
     
      <div className="flex justify-center space-x-6 mb-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon fontSize="large" className="hover:text-[#dcf245]" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="large" className="hover:text-[#dcf245]" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon fontSize="large" className="hover:text-[#dcf245]" />
        </a>
      </div>

      <div className="text-center text-sm mb-2 ">
        <p className='text-xl'>Samp Mart HQ, 123 Market Street, City Name, Country</p>
        <p>Email: support@sampmart.com | Phone: +1 234 567 890</p>
      </div>

      
      <div className="text-center text-xs border-t border-[#dcf245] pt-2">
        <p>© 2025 Samp Mart. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="hover:text-[#dcf245] ">Terms & Conditions</a> | <a href="#" className="hover:text-[#dcf245]">Privacy Policy</a>
     </p>
      </div>
    </footer>
  );
};

export default Footer;
