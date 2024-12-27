import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E88E5", // Bright blue from the character
          light: "#64B5F6", // Lighter blue for hover states
          dark: "#1565C0", // Darker blue for active states
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFB74D", // Gold accent from the character
          light: "#FFD54F", // Lighter gold for hover states
          dark: "#FFA000", // Darker gold for active states
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#E3F2FD", // Very light blue for backgrounds
          foreground: "#1E88E5",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#64748B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "magical-gradient": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "magical-gradient": "magical-gradient 6s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/lovable-uploads/7a7938ce-61ea-4018-a362-c8f81272bd5b.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;