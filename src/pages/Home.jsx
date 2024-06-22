import Card from "../components/Card";

const Home = () => {
  const date = new Date();
  return (
    <section className="blogs">
      <Card
        id={1}
        author={"Sanket Patil"}
        date={date}
        image={"https://avatars.githubusercontent.com/u/64531568?v=4"}
        title={"Hello world"}
      />
    </section>
  );
};

export default Home;
