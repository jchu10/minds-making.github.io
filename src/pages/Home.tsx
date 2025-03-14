import Header from "../components/Header";
import "../custom.css";
import Events from "./Events";
import People from "./People";
import Research from "./Research";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: "Georgia, serif",
        }}
        id="home"
        className="min-h-screen bg-[url('/background.svg')] bg-cover bg-center flex flex-col"
      >
        <div className="flex flex-col-reverse md:flex-row mt-16">
          <div className="w-72 h-72 ">

          </div>
          <div className="flex flex-col ml-12">
            <div className="text-5xl">Minds in the Making</div>
            <div className="text-3xl mt-6">
              A workshop for cognitive science and design thinking.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full px-12 flex flex-col">
            <div className="flex flex-col w-full mb-12">
              <div style={{ width: "100%" }} className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#a4bdc2" }}
        className="flex flex-col -mt-32 pb-32"
      >
        <div
          style={{
            backgroundColor: "#a4bdc2",
            fontFamily: "'Roboto Mono', monospace",
          }}
          className="text-2xl mx-4 md:mx-24"
        >
          Project Nightingale is a multidisciplinary effort to advance the
          science of how people learn to reason about data. Our work aims to
          develop psychological theories that explain how learning takes place
          in authentic educational environments.
        </div>
        <div id="team" className="mt-24 mx-4 md:mx-24">
          <People />
        </div>
        <div id="research" className="mt-12 mx-4 md:mx-24">
          <Research />
        </div>
        <div id="events" className="mt-12 mx-4 md:mx-24">
          <Events />
        </div>
      </div>
    </>
  );
};



export default Home;
