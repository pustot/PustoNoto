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

let ans = '* [README.md](README.md)\n';
let prevdir = '';

for (let file of files) {
    if (file === 'README.md') // already written as the first line
        continue;
    if (file === 'SUMMARY.md') // GitBook TOC, not real content
        continue;
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