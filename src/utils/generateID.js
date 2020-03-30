// Quick and dirty ID generation.
let lastID = 0;

export default function generateID() {
  return lastID++;
}
