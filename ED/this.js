


const user = {
    name: "developedByEd",
    videos: ["html", "css", "js", "react"],
    //Adding a method
    //At this level THIS keyword works but below inner function THis keyword does not work!!!
    //If we attach this on that level to a variable on the upperpart it wil work....
    //If we change getvideos function syntax to an arrow function it also will work finely...
    greet() {
      console.log(`Hello there ${this.name}`);
        // let forthis = this; 
      // adding a function inside the method
      const getVideos = function() {
        console.log(`You currently have ${this.videos.length} videos`);
      };
      getVideos();
    },
  };
  
  user.greet();
  