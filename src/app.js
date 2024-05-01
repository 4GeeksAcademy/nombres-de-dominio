let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "nice"];
let noun = ["jogger", "racoon", "bigger"];
let domain = [".es", ".com", ".net"];

for (let i = pronoun; i < pronoun.length; i++) {
  for (let j = adj; j < adj.length; j++) {
    for (let x = noun; x < noun.length; x++) {
      for (let z = domain; z < domain.length; z++) {
        console.log(pronoun[i] + adj[j] + noun[x] + domain[z]);
      }
    }
  }
}
