'use strict'

console.log(process.argv);

// slice out first (interpreter, i.e., node), and second (full script path)
// from arguments, to get the filenames
const filenames = process.argv.slice(2);

let counts = filenames.map(f => {
  try {
    const data = fs.readFileSync(f, { encoding: 'utf8' });
    return `${f}: ${data.split('\n').length}`;
  } catch (err) {
    // Why is the not working?
    return `${f}: couldn't read file`;
  }
});

console.log(counts.join('\n'));
