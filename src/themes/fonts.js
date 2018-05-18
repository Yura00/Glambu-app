import Colors from "./colors";

const size = {
  h1: 40,
  h2: 30,
  h3: 20,
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
  profileName: {
    fontSize: size.h2,
    color: "#333333",
    fontWeight: "100",
  },
  profileAge: {
    fontSize: size.h2,
    color: "#333333",
  },
  subTitle: {
    fontSize: size.h3,
    color: "#0000008f",
  },
};

export default {
  size,
  style,
};
