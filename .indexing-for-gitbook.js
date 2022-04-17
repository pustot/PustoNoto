const fs   = require("fs");
const path = require("path");
let files  = [];

function ThroughDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const Absolute = path.join(directory, file);
        if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return files.push(Absolute);
    });
}

ThroughDirectory("./");

files = files.filter(file => path.extname(file) == ".md")

// console.log(files)

let ans = '';
let prevdir = '';

for (let file of files) {
    let parsed = path.parse(file);
    if (parsed.dir == '')
        ans += '* [' + parsed.base + '](' + parsed.base + ')\n';
    else {
        if (prevdir !== parsed.dir) {
            ans += '* [' + parsed.dir + '](' + parsed.dir.replace(/\\/g, '/') + '/' + 'README.md' + ')\n';
        }
        ans += '    * [' + parsed.base + '](' + file.replace(/\\/g, '/') + ')\n';
        prevdir = parsed.dir;
    }
}

console.log(ans)

fs.writeFileSync('./SUMMARY.md', ans);