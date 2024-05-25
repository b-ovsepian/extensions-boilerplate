import React, { useState } from "react"
import classNames from "classnames"

const Select = (conf) => {
  const selected = conf.options.find((option) => option.selected)
  const [value, setValue] = useState(selected ? selected.value : null)

  return (
    <select
      value={value}
      className={classNames(
        "w-full max-w-xs mx-auto select select-bordered",
        conf.className
      )}
      name={conf.name}
      onChange={(e) => setValue(e.target.value)}
    >
      {conf.label && (
        <option disabled value="none">
          {conf.label}
        </option>
      )}
      {conf.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
