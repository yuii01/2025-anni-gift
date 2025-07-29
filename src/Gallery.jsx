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
      title: "Message Wall Hits 10",
      description: "Celebrating when the board hit 10 unique messages!",
      image: "/images/celebration.png"
    },
    {
      title: "Minati's Minimalist Tribute",
      description: "Even without words, this message left a mark.",
      image: "/images/minati.png"
    }
  ];

  return (
    <div className="gallery">
      <h1 className="gallery-title">🎉 One Year of the Hub 🎉</h1>
      <p className="gallery-subtitle">A celebration of memories, messages, and milestones.</p>

      <div className="gallery-grid">
        {anniversaryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <p>Want to contribute to next year’s wall? Submit a message, photo, or memory through the Messages page!</p>
      </div>
    </div>
  );
}
