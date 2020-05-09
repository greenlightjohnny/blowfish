import React from "react"
import Styles from "./main.module.scss"
import Fish from "../images/blowfish.svg"
export default () => (
  <div>
    <section className={Styles.landing}>
      <div className={Styles.landingflex}>
        <div className={Styles.title}>
          {" "}
          <h1>
            Blow<span className={Styles.spantitle}>fish</span> Studios
          </h1>
          <p>
            <span class={Styles.high}>Custom </span>website development.{" "}
            <br></br> Blazing <span class={Styles.high}>fast</span> load times.
            <br></br>
            <span class={Styles.high}>Innovative </span>designs.
          </p>
        </div>
        <div className={Styles.fish}>
          <img src={Fish} alt="Cute blowfish cartoon"></img>
        </div>
      </div>
    </section>
  </div>
)
