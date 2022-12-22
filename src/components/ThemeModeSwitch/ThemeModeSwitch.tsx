import React, { memo } from "react";

import { styled } from "@mui/system";
import { Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useIsDarkMode } from "../../store/redux-store/slices/themeMode/themeMode.hooks";
import { useAppDispatch } from "../../store/redux-store/hooks";
import { toggleThemeMode } from "../../store/redux-store/slices/themeMode/themeMode.silce";

const ThemeModeSwitchComponent: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  const dispatch = useAppDispatch();

  return (
    <Content>
      <LightModeIcon
        color={`${isDarkMode ? "action" : "primary"}`}
        fontSize="small"
      />
      <Switch
        checked={isDarkMode}
        onChange={() => dispatch(toggleThemeMode())}
        name="theme"
      />
      <DarkModeIcon
        color={`${isDarkMode ? "primary" : "action"}`}
        fontSize="small"
      />
    </Content>
  );
};

const Content = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ThemeModeSwitch = memo(ThemeModeSwitchComponent);

export default ThemeModeSwitch;
