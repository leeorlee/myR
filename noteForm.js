function saveNewNote() {
  let note = {
    noteText: document.getElementById("noteText").value,
    dueDate: document.getElementById("dueDate").value
  };
  window.localStorage.setItem("notes", JSON.stringify(note));



  return true;
}

function getInfoFromLocalStorage() {
  let noteStr = window.localStorage.getItem("note");
  console.log(noteStr);
  let noteObj = JSON.parse(noteStr);
  document.getElementById("noteText").value = noteObj.noteText;
  document.getElementById("dueDate").value = noteObj.dueDate;
}

const newNotes = ['NEW NOTE','NEW NOTE','NEW NOTE','NEW NOTE','NEW NOTE','NEW NOTE','NEW NOTE'];
let nextNoteIndex = 0;
let nextNote = new Array();

class nNote {
    constructor() {
    }
    static toString() {
        return this.description;
    }
    createDiv(){
        let div = document.createElement("div");
        div.classList.add("nNote");
        let image = document.createElement("img");
        image.src = 'notebg.png';
        let p = document.createElement("p");
        p.setAttribute("dir","rtl");
        p.innerHTML = this.toString();
        div.appendChild(image);
        div.appendChild(p);
        return div;
    }
    static description = "nNote base class static description";
  }
  
  

class DayNote extends nNote {
    static instanceIndex = 0;
    constructor() {
        super();
        this.dayIndex =  DayNote.instanceIndex;
        DayNote.instanceIndex++;
    }
    toString() {
        return newNotes[this.dayIndex];
    }
    show(){
        let div = super.createDiv();
        div.addEventListener("click", ()=>{
            console.log("click");
        });
        let gridCells = document.querySelectorAll(".col-lg-3");
        gridCells[nextNoteIndex].appendChild(div);
        nextNoteIndex++;
/*global*/
        let noteStr = window.localStorage.getItem("note");
        console.log(noteStr);
        let noteObj = JSON.parse(noteStr);
        console.log(this.dayIndex);
    }
}

function initPage(){
    //console.log(Candle.description);
    let noteStr = window.localStorage.getItem("note");
    console.log(noteStr);
    let noteArray = JSON.parse(noteStr);
    console.log (noteArray.length);

    for (var i = 0; i < 4; i++)
    nextNote.push(new DayNote());
        

}

function addNewNote(){
    if (nextNoteIndex < newNotes.length)
        nextNote[nextNoteIndex].show();
}

let myVar = setInterval(myTimer, 5000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = t;
}
