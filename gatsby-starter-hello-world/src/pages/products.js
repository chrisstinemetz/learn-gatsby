import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>this is the products page</h1>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A modi
            soluta nesciunt dolorem debitis. Rem voluptatibus dicta numquam
            impedit amet molestiae minima voluptatum ad iste nemo. Quasi tempora
            odio eos est excepturi. Iure corporis officia repellat soluta omnis
            maxime quod provident laborum modi recusandae sapiente sequi,
            perspiciatis est tempore? Vel.
          </p>
        </div>
      </Layout>
    )
  }
}
