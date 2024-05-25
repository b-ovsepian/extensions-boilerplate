import React, { useState } from "react"
import classNames from "classnames"

const Range = (conf) => {
  const [value, setValue] = useState(conf.value || 0)

  return (
    <>
      <input
        type="range"
        min={conf.min || 0}
        max={conf.max || 10}
        className={classNames("range", conf.className)}
        value={value}
        step={conf.step || 1}
        name={conf.name || "range"}
        required={conf.required || false}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex justify-between w-full px-2 text-xs">
        {[...Array(conf.max || 10).keys()].map((i) => (
          <button type="button" key={i}>
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Range
