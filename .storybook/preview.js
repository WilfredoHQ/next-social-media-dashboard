import "../styles/globals.css";

import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "contrast",
      items: ["light", "dark"],
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <div className={[context.globals.theme].join(" ")}>
        <Story {...context} />
      </div>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
