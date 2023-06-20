import fs from 'fs';

export async function getCases() {
  return new Promise((resolve, reject) => {
    fs.readdir('./public/cases', (err, files) => {
      if (err) {
        reject(err);
      }
      files = files.filter(filename => !filename.startsWith('.'));
      files.sort((a, b) => b.localeCompare(a))
      resolve(files);
    });
  })
}