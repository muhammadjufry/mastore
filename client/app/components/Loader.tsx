import React from 'react'
import styles from "../styles/module_styles/loader.module.css"
type Props = {}

function Loader({}: Props) {
  return (
    <span className={styles.loader}></span>
  )
}

export default Loader