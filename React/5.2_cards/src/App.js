import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const cardDetails = [
    {
      img: "https://www.wallpaperup.com/uploads/wallpapers/2012/10/15/19408/af035e205832a55e7b17b8b57583c286.jpg",
      title: "Beautiful",
      description: "A beautiful place",
      link1: "https://google.com",
      link2: "http://github.com",
    },
    {
      img: "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg",
      title: "Nice",
      description: "A nice observation",
      link1: "https://google.com",
      link2: "http://github.com",
    },
    {
      img: "https://img.blogs.es/anexom/wp-content/uploads/2019/11/big-data-vida-portada.jpg",
      title: "Wonderful",
      description: "A wonderful view",
      link1: "https://google.com",
      link2: "http://github.com",
    },
  ];
  return (
    <div className="body">
      {cardDetails.map((card) => {
        return (
          <Card
            card={[
              card.img,
              card.title,
              card.description,
              card.link1,
              card.link2,
            ]}
          />
        );
      })}
    </div>
  );
}

export default App;
