import React from "react"
import Styles from "./main.module.scss"

export default () => (
  <div>
    <section className={Styles.landing}>
      <div className={Styles.landingflex}>
        <div className={Styles.title}>
          {" "}
          <h1>Blowfish Studio</h1>
          <p>
            Custom website development. Blazing fast speeds. Innovative designs.
          </p>
        </div>
      </div>
    </section>
  </div>
)
