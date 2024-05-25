import React, { useState } from "react"
import classNames from "classnames"

const Radio = (conf) => {
  const checked = conf.options.find((option) => option.checked)
  const [value, setValue] = useState(checked ? checked.value : null)

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      {conf.options.map((option, index) => (
        <label className="flex items-center cursor-pointer gap-x-2" key={index}>
          <input
            type="radio"
            name={conf.name}
            className={classNames("radio text-black", option.className, {
              "bg-transparent": value !== option.value,
            })}
            value={option.value}
            checked={value === option.value}
            required={conf.required}
            onChange={(e) => setValue(e.target.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}

      {conf.withCustom && (
        <div className="flex flex-col col-span-2 gap-y-2">
          <label className="flex items-center cursor-pointer gap-x-2">
            <input
              type="radio"
              name={conf.name}
              className={classNames("radio text-black", {
                "bg-transparent": value !== "custom",
              })}
              value="custom"
              checked={value === "custom"}
              required={conf.required}
              onChange={(e) => setValue(e.target.value)}
            />
            <span>Custom</span>
          </label>
          <input
            type="text"
            name={`${conf.name}-custom`}
            className={classNames("input input-bordered", {
              hidden: value !== "custom",
            })}
            placeholder="Text here..."
          />
        </div>
      )}
    </div>
  )
}

export default Radio
