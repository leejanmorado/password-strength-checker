import React, { useState } from 'react'

const PasswordInput = ({ value, onChange }) => {
  const [field, setField] = useState({
    isPassword: true
  })
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  const toggleInput = () => {
    setField({ isPassword: !field.isPassword })
  }

  return (
    <>
      <input
        className="password"
        type={field.isPassword ? "password" : "text"}
        name="password"
        placeholder="Type a password"
        value={value}
        onChange={handleChange}
      />
      <span
        className="input-button"
        onClick={toggleInput}
      >
        {field.isPassword ? "SHOW" : "HIDE"}
      </span>
    </>
  )
}

export default PasswordInput