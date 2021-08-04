import "../styles/globals.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      items: ["light", "dark"],
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <div className={[context.globals.theme].join(" ")}>
        <Story />
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
