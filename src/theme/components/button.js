// components/button.js

const Button = {
  // Styles for the base button
  baseStyle: {
    fontWeight: "bold", // Change the font weight
    borderRadius: "md", // Change the border radius
  },
  // Styles for different sizes (e.g., small, medium, large)
  sizes: {
    // Example: custom size 'xl'
    xl: {
      fontSize: "2xl",
      padding: "8",
    },
  },
  // Styles for different variants (e.g., solid, outline)
  variants: {
    // Example: custom variant 'outlineRed'
    outlineRed: {
      border: "2px solid red",
      color: "red",
    },
  },
  // Styles for different states (e.g., hover, focus)
  defaultProps: {
    size: "md", // Default size
    variant: "outlineRed", // Default variant
  },
};

export default Button;
