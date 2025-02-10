import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const ToggleContainer = styled.div`
  top: 16px;
  right: 16px;
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => (theme.mode === "light" ? "#ccc" : "#333")};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) =>
    theme.mode === "light" ? "flex-start" : "flex-end"};
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s, justify-content 3s;
`;

const ToggleBall = styled.div`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => (theme.mode === "light" ? "#ffff" : "#1A1F2C")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  color: ${({ theme }) => (theme.mode === "light" ? "#FFC107" : "#FFD600")};
  width: 15px;
  height: 15px;
`;

const GlobalStyle = createGlobalStyle`
  input {
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1a1a1a")} !important;
  }
`;

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
    <ThemeProvider theme={{ mode: theme }}>
    <GlobalStyle />
      <ToggleContainer onClick={toggleTheme}>
        <ToggleBall>
          {theme === "light" ? <Icon as={Sun} /> : <Icon as={Moon} />}
        </ToggleBall>
      </ToggleContainer>
    </ThemeProvider>
    </>
  );
}
