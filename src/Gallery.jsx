import { m } from 'framer-motion';
import './Gallery.css';

export default function Gallery() {
  const anniversaryItems = [
    {
      title: "First Message Sent",
      description: "The very first message was posted by Phoebe. A wholesome start!",
      image: "/images/phoebe1.png"
    },
    {
      title: "Pixel Austyn",
      description: "Sophia submitted a pixel art version of Austyn since she had no photos.",
      image: "/images/sophia1.png"
    },
    {
      title: "the game before hoco",
      image: "/images/hoco.JPEG"
    },
    {
      title: "us at the spelling bee:)",
      image: "/images/8th.JPEG"
    },
    {
      title: "first snow",
      image: "/images/snow.JPEG"
    },
    {
      title: "our hoco!",
      image: "/images/hoco.JPEG"
    },
    {
      title: "hoco flowers!!!!",
      image: "/images/flower.JPEG"
    },
    {
      title: "stuck in the rainn",
      image: "/images/rainy.JPEG"
    },
    {
      title: "my little polar bear",
      image: "/images/bear.JPEG"
    },
    {
      title: "i borrowed your coat",
      image: "/images/coat.JPEG"
    },
    {
      title: "EARRINGSS",
      image: "/images/earring.JPEG"
    },
    {
      title: "kcc shennaniganns",
      image: "/images/kcc.JPEG"
    },
    {
      title: "went to see your bball game!!",
      image: "/images/bball.JPEG"
    },
    {
      title: "our first date ever (?)???",
      image: "/images/skating.JPEG"
    },
    {
      title: "me in your jacket",
      image: "/images/me.JPEG"
    }
  ];

  return (
    <div className="gallery">
      <h1 className="gallery-title">Welcome to the Gallery</h1>
      {/* <p className="gallery-subtitle">A celebration of memories, messages, and milestones.</p> */}

      <div className="gallery-grid">
        {anniversaryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <h3 className="gallery-heading">{item.title}</h3>
          </div>
        ))}
      </div>

    
    </div>
  );
}
