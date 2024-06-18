const fs = require("fs");
// 01 File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
const cleanFile = async (filePath) => {
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const cleanedContent = fileContent.replace(/\s+/g, " ");
      fs.writeFileSync("cleanedFile.txt", cleanedContent, (err) => {
        if (err) console.log("something went wrong writing file content");
      });
    } catch (error) {
      console.log("Something went wrong!");
    }
  };
//   cleanFile("./file2.txt");

// 02 Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)
const clock = () => {
    const time = new Date();
    const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
    const minutes =
      time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
    const seconds =
      time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;
    console.log(`${hours}:${minutes}:${seconds}`);
  };
  
//   setInterval(clock, 1000);
