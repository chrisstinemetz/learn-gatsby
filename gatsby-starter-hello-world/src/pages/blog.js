import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint rerum
          quod, dolore fugit molestiae dolores magnam. Asperiores vitae quod
          dolorum quisquam architecto dolore in, ratione possimus ad consequatur
          cumque rem magni amet, laborum enim corporis ullam distinctio qui
          nobis temporibus minima nam officiis, culpa deleniti? A,
          exercitationem itaque? Molestias, labore.
        </p>
      </div>
    </Layout>
  )
}

export default blog
