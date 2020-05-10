import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ToggleButton from "react-toggle-button"
import Sun from "../assets/sun.svg"
import Moon from "../assets/moon.svg"

// TODO auto-detect browser preference and set dark mode based on that

export default class DarkMode extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "30px",
          "border-radius": "4px",
          padding: "8px",
          height: "42px",
          width: "42px",
          "padding-bottom": "0px",
        }}
      >
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <ToggleButton
              value={theme === "dark" || false}
              onToggle={value => {
                toggleTheme(!value ? "dark" : "light")
              }}
              activeLabel={"Day"}
              inactiveLabel={"Night"}
              ariaLabel={`Turn ${theme === "dark" ? "off" : "on"} dark mode`}
              colors={{
                active: {
                  base: "#c1a101",
                },
              }}
            />
          )}
        </ThemeToggler>
      </div>
    )
  }
}
