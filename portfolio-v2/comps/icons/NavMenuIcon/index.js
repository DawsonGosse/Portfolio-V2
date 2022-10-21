import * as React from "react"

const NavMenuIcon = (props) => (
  <svg
    width={24}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.333}
      y={0.667}
      width={23.333}
      height={2.5}
      rx={1.25}
      fill="snow"
    />
    <rect
      x={0.333}
      y={7.333}
      width={23.333}
      height={2.5}
      rx={1.25}
      fill="snow"
    />
    <rect x={0.333} y={14} width={23.333} height={2.5} rx={1.25} fill="snow" />
  </svg>
)

export default NavMenuIcon