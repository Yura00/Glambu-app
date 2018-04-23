import Colors from "./colors";

const size = {
  h1: 40,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  default: 12,
  small: 10,
  mini: 8,
};
const style = {
  topic: {
    fontSize: size.h1,
    color: Colors.black,
    textAlign: "left",
  },
  comments: {
    color: Colors.commentText,
    fontSize: size.h6,
  },
  description: {
    color: Colors.description,
    fontSize: size.h4,
  },
};

export default {
  size,
  style,
};
