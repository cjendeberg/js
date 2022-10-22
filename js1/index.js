const questions = [
  {
    question: "Is Olivia 22?",
    answer: true
  },
  {
    question: "Is Olivia dark haired?",
    answer: true
  },
  {
    question: "Is Olivia a boy?",
    answer: false
  }

];

let index = 0;
let result = questions.map(x => {
  index++;
  return (
    `<fieldset>
      <legend>${x.question}</legend>
      <div>
      <input type="radio" id="input${index}T" name="input${index}" value="true"/>
      <label for="input${index}T"/>true</label>
      </div>
      <div>
      <input type="radio" id="input${index}F" name="input${index}" value="false"/>      
      <label for="input${index}F"/>false</label>
      </div>
    </fieldset>`
  );
}).join("");

let main = document.getElementById("main");
main.innerHTML = result;

let processBtn = document.getElementById("process");
processBtn.addEventListener("click", () => {
  let result = 0;
  let error = "";
  for(let i = 1; i <= questions.length; i++){
    let foundAnswer = document.querySelector(`input[name="input${i}"]:checked`);
    if(foundAnswer){
      let answer = foundAnswer.value == 'true'
      if(answer == questions[i-1].answer){
        result++;
      }
    } else {
      error = "Not all questions answered!"
      break;
    }
  }
  let resultElement = document.getElementById("result");
  if(error.length > 0){
    resultElement.innerHTML = error;
  } else {
    resultElement.innerHTML = "Result: " + result;
  }
})
