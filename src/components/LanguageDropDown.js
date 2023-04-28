import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function LanguageDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Lanagauge
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">English</Dropdown.Item>
        <Dropdown.Item href="#">Hindi</Dropdown.Item>
        <Dropdown.Item href="#">French</Dropdown.Item>
        <Dropdown.Item href="#">Dutch</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
