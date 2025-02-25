import Video from "../components/Video"
import PfeifferVideo from "../assets/videos/3298229-uhd_4096_2160_25fps.mp4"

function Home() {
  return (
    <section className="home-container container">
      <Video data={PfeifferVideo} />
    </section>
  )
}

export default Home