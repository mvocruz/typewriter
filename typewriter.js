const sentence = "hello there from lighthouse labs";
let interval = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 100;
}
setTimeout(() => {
  console.log();
}, interval);


