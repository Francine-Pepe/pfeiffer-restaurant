import LogoPfeiffer from "../assets/images/noBgBlack.svg";

function Logo() {
  return (
    <div className="logo-container">
        <img src={LogoPfeiffer} alt="Pfeiffer restaurant Logo" style={{color: "white"}} />
    </div>
  )
}

export default Logo