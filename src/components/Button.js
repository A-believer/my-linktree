import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ id, value, link }) {
  return (
    <a
      href={link}
      id={id}
      target=""
      rel="noopener noreferrer"
      className="w-full text-center py-4 bg-gray-200 border border-gray-200 
      rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400"
    >
      {value}
    </a>
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}