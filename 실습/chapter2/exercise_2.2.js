const fs = require('fs').promises;
const path = require('path');

async function getFiles(directory) {
    try {
        const files = await fs.readdir(directory);
        return files.map(file => path.join(directory, file));
    } catch (err) {
        throw err;
    }
}

async function processFile(filePath) {
    try {
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
            return searchDirectory(filePath);
        } else if (path.extname(filePath) === '.js') {
            console.log(filePath);
        }
    } catch (err) {
        throw err;
    }
}

async function searchDirectory(directory) {
    try {
        const files = await getFiles(directory);
        await Promise.all(files.map(processFile));
    } catch (err) {
        console.error(err);
    }
}

(async () => {
    try {
        await searchDirectory('./test');
    } catch (err) {
        console.error(err);
    }
})();