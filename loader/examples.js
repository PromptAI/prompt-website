import fs from "fs";

const pcVideos = ["IT-Helpdesk-R1.mp4"];
export async function getExamples(locale = "zh") {
  return new Promise((resolve, reject) => {
    fs.readdir(`./public/examples/${locale}`, (err, files) => {
      if (err) {
        reject(err);
      }
      files = files.filter((filename) => !filename.startsWith("."));
      files.sort((a, b) => b.localeCompare(a));
      resolve(files.map((f) => ({ filename: f, pc: pcVideos.includes(f) })));
    });
  });
}
