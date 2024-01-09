const Button = {
  // Styles for the base button
  baseStyle: {
    borderRadius: "md", // Change the border radius
    border: "1px solid black"
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
    variant: "", // default variant
  },
};

export default Button;
