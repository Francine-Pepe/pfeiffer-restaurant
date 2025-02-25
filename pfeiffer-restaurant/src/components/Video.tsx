function Video(props: any) {

    const {data} = props;

  return (
    <div className="video-container">
        <video
            src={data}
            autoPlay 
            loop
        />
    </div>
  )
}

export default Video