import './About.css';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';




function About() {
  return (
    <div>
   
      <h1>About Us</h1>
      <p>
        Selamatdatang di booking online sport lapangan
      </p>
      <h2>Alamat Kami</h2>
      <p>Jalan Contoh No. 123</p>
      <p>Kota kita</p>
      <p>Kode Pos: 12345</p>
      <h2>Hubungi Kami</h2>
      <p>Email: info@contoh.com</p>
      <p>Telepon: o85 456-7890</p>
      <h2>Info lebih lanjut cek di sosial Media</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com/contoh" target="_blank" rel="noopener noreferrer"> <FaFacebook size={32} />
            Facebook
          </a>
        </li>
        <li>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} /> Twwiter
      </a>
        </li>
        <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} /> Instagram</a>
        <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={32}/>Whatsap </a> 
        <a>0838 0789 9678</a>
      </li>
      </ul>
    </div>
  );
}

export default About;
