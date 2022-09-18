function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be an ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
}

let itBe = tellFortune("Olympic chair sitter", "Ikea", "Janet", "11");

console.log(itBe);
