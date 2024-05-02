let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "nice"];
let noun = ["jogger", "racoon", "bigger"];
let domain = [".es", ".com", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let x = 0; x < noun.length; x++) {
      for (let z = 0; z < domain.length; z++) {
        console.log(pronoun[i] + adj[j] + noun[x] + domain[z]);
       
      }
    }
  }
}