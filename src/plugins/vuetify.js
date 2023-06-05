// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#0D47A1",
        },
      },
      dark: {
        colors: {
          primary: "#0D47A1",
        },
      },
    },
  },
});
