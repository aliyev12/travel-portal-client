import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";

const letterColors = {
  a: purple[500],
  b: red[500],
  c: pink[500],
  d: deepPurple[500],
  e: indigo[500],
  f: blue[500],
  g: lightBlue[500],
  h: cyan[500],
  i: teal[500],
  j: green[500],
  k: lightGreen[500],
  l: lime[500],
  m: yellow[500],
  n: amber[500],
  o: orange[500],
  p: deepOrange[500],
  q: brown[500],
  r: grey[500],
  s: blueGrey[500],
  t: purple[900],
  u: red[900],
  v: pink[900],
  w: deepPurple[900],
  x: indigo[900],
  y: blue[900],
  z: lightBlue[900]
};

export default (letter: string) => {
  return letterColors[letter.toLowerCase()];
};
