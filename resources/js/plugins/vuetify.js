import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css'

const customeTheme = {
    dark: false,
    colors: {
        primary: "#1E2D56",      // Dark Blue
        secondary: "#0A3D6A",    // Deep Blue
        accent: "#1A73E8",       // Light Royal Blue
        error: "#FF5252",        // Red remains unchanged
        info: "#2196F3",         // Standard Blue
        success: "#4CAF50",      // Green remains unchanged
        warning: "#FFC107",      // Yellow remains unchanged
        lightblue: "#14c6FF",    // Light Blue remains unchanged
        yellow: "#FFCF00",       // Yellow remains unchanged
        pink: "#FF1976",         // Pink remains unchanged
        orange: "#FF8657",       // Orange remains unchanged
        magenta: "#C33AFC",      // Magenta remains unchanged
        darkblue: "#1E2D56",     // Dark Blue remains unchanged
        gray: "#909090",         // Gray remains unchanged
        neutralgray: "#9BA6C1",  // Neutral Gray remains unchanged
        green: "#2ED47A",        // Green remains unchanged
        red: "#FF5c4E",          // Red remains unchanged
        darkblueshade: "#308DC2",// Darker Blue shade
        lightgray: "#BDBDBD",    // Light Gray remains unchanged
        lightpink: "#FFCFE3",    // Light Pink remains unchanged
        white: "#FFFFFF",        // White remains unchanged
        muted: "#6c757d",        // Muted color remains unchanged
    },
};

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "customeTheme",
        themes: {
            customeTheme,
        },
    },
    icons: {
        defaultSet: 'mdi', 
    },
});

export default vuetify;