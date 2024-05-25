import React from "react"
import * as FaIcons from "react-icons/fa6"

const Icon = ({ name }) => {
  const Icon = FaIcons[`Fa${name}`] || FaIcons.FaQuestion
  return <Icon />
}

export default Icon
