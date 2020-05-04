import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Sun from "../assets/sun.svg"
import Moon from "../assets/moon.svg"

// TODO auto-detect browser preference and set dark mode based on that

export default class DarkMode extends React.Component {
  render() {
    return (
      // Use a library for button styling
      <button
        title={"Toggle dark mode"}
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          "border-radius": "4px",
          padding: "8px",
          height: "42px",
          width: "42px",
          "padding-bottom": "0px",
        }}
      >
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                style={{
                  display: "none",
                }}
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              {theme !== "dark" ? <Moon /> : <Sun />}
            </label>
          )}
        </ThemeToggler>
      </button>
    )
  }
}
