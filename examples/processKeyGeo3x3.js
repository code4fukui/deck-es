export const processKeyGeo3x3 = (e, s) => {
  if (e.key == "Backspace") {
    if (s.length > 0) {
      s = s.substring(0, s.length - 1);
    }
  } else if (e.key == "e") {
    if (s.length <= 1) {
      s = "E";
    }
  } else if (e.key == "w" || e.key == "-") {
    if (s.length <= 1) {
      s = "W";
    }
  } else if ("123456789".indexOf(e.key) >= 0) {
    const n = "123456789".indexOf(e.key) + 1;
    if (s.length == 0) {
      s = "E";
    }
    s += n;
  }
  return s;
};
