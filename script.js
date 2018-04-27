//variables for section;
const main = document.createElement("main");
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]; 

function buildMain(...elements) {
    elements.forEach(element => main.appendChild(element));
}

function runKatas(...kataFunctions) {
    kataFunctions.forEach(kata => {
        const kataOutput = kata();

        const paragraph = document.createElement("div");
        paragraph.textContent = kataOutput.description;
        paragraph.className = "problems";
        
        const answer = document.createElement("div");
        answer.textContent = kataOutput.answer;
        answer.className = "kata" + kataOutput.number;
        
        buildMain(paragraph, answer);
    });
}

//content for heading and answers

function kataOne() {
    const output = {
        description: "1. Display numbers 1 to 20",
        number: "1",
        answer: "",
        numElements: 1,
    }
    for (let i = 1; i <= 20; i++) {
        output.answer += " " + i;
    }
    return output;
}

function kataTwo() {
    const output = {
        description: "2. Display even numbers from 1 to 20",
        number: "2",
        answer: "",
        numElements: 1,
    }
    for (let i = 2; i <= 20; i += 2) {
        output.answer += " " + i;
    }
    return output;
}

function kataThree() {
    const output = {
        description: "3. Display odd numbers from 1 to 20",
        number: "3",
        answer: "",
        numElements: 1,
    }
    for (let i = 1; i <= 20; i += 2) {
        output.answer += " " + i;
    }
    return output;
}

function kataFour() {
    const output = {
        description: "4. Display odd numbers from 1 to 20",
        number: "4",
        answer: "",
        numElements: 1,
    }
    for (let i = 5; i <= 100; i += 5) {
        output.answer += " " + i;
    }
    return output;
}

function kataFive() {
    const output = {
        description: "5. Square numbers",
        number: "5",
        answer: "",
        numElements: 1,
    }
    for (let i = 1; i <= 10; i++) {
        output.answer += " " + (i*i);
    }
    return output;
}

function kataSix() {
    const output = {
        description: "6. Counting numbers backwards from 20",
        number: "6",
        answer: "",
        numElements: 1,
    }
    for (let i = 20; i >= 1; i--) {
        output.answer += " " + i;
    }
    return output;
}

function kataSeven() {
    const output = {
        description: "7. Counting even numbers backwards from 20",
        number: "7",
        answer: "",
        numElements: 1,
    }
    for (let i = 20; i >= 1; i -= 2) {
        output.answer += " " + i;
    }
    return output;
}

function kataEight() {
    const output = {
        description: "8. Counting odd numbers backwards from 20",
        number: "8",
        answer: "",
        numElements: 1,
    }
    for (let i = 19; i >= 1; i -= 2) {
        output.answer += " " + i;
    }
    return output;
}

function kataNine() {
    const output = {
        description: "9. Counting mulitples of 5 backwards from 100",
        number: "9",
        answer: "",
        numElements: 1,
    }
    for (let i = 100; i >= 1; i -= 5) {
        output.answer += " " + i;
    }
    return output;
}

function kataTen() {
    const output = {
        description: "10. Counting square numbers backwards from 100",
        number: "10",
        answer: "",
        numElements: 1,
    }
    for (let i = 10; i >= 1; i--) {
        output.answer += " " + (i*i);
    }
    return output;
}

function kataEleven() {
    const output = {
        description: "11. Display first 20 elements of array",
        number: "11",
        answer: "",
        numElements: 1,
    }
    for (let i = 0; i < sampleArray.length; i++) {
        output.answer += " " + sampleArray[i];
    }
    return output;
}

function kataTwelve() {
    const output = {
        description: "12. Display even number values of array",
        number: "12",
        answer: "",
        numElements: 1,
    }
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i]%2===0){
            output.answer += " " + sampleArray[i];
        }  
    }
    return output;
}

function kataThirteen() {
    const output = {
        description: "13. Display odd number values of array",
        number: "13",
        answer: "",
        numElements: 1,
    }
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i]%2!==0){
            output.answer += " " + sampleArray[i];
        }  
    }
    return output;
}

function kataFourteen() {
    const output = {
        description: "14. Display the square of each element in the array",
        number: "14",
        answer: "",
        numElements: 1,
    }
    for (let i = 0; i < sampleArray.length; i++) {
        output.answer += " " + sampleArray[i] * sampleArray[i]; 
    }
    return output;
}

function kataFifteen() {
    let total = 0;
    const output = {
        description: "15. sum of 1 to 20",
        number: "15",
        answer: "",
        numElements: 1,
    }
    for (let i = 1; i <= 20; i++) {
        total += i; 
    }output.answer = total;
    return output;
}

function kataSixteen() {
    // let total = 0;
    const output = {
        description: "16. sum of all elements in the array",
        number: "16",
        answer: "",
        numElements: 1,
    }
    output.answer = sampleArray.reduce((val, arr) => val + arr);
    // for (let i = 0; i < sampleArray.length; i++) {
    //     total += sampleArray[i]; 
    // }output.answer = total.toString();
    return output;
}

function kataSeventeen() {
    const output = {
        description: "17. Smallest element in the array",
        number: "17",
        answer: "",
        numElements: 1,
    }
    output.answer = sampleArray.reduce((minValue, curr) => curr < minValue ? curr : minValue);
    //output.answer = Math.min(...sampleArray);

    return output;
}

function kataEighteen() {
    const output = {
        description: "18. Largest element in the array",
        number: "18",
        answer: "",
        numElements: 1,
    }
    output.answer = sampleArray.reduce((maxValue, curr) => curr > maxValue ? curr : maxValue);
    // output.answer = Math.max(...sampleArray);

    return output;
}

function kataNineteen() {
    const output = {
        description: "19. display 20 solid gray rectangle 20px high and 100 px wide",
        number: "19",
        answer: "",
        numElements: 20,
    }
    const paragraph = document.createElement("div");
        paragraph.textContent = output.description;
        paragraph.className = "problems"; 
        main.appendChild(paragraph);

    for(let i = 0; i < output.numElements; i++){
        const answer = document.createElement("div");
        answer.textContent = output.answer;
        answer.className = "kata" + output.number;
        main.appendChild(answer);
    }
    return output;
}

function kataTwenty() {
    const output = {
        description: "20. display 20 solid gray rectangles with width of 105 to 200",
        number: "20",
        answer: "",
        numElements: 20,
    }
    const paragraph = document.createElement("div");
        paragraph.textContent = output.description;
        paragraph.className = "problems"; 
        main.appendChild(paragraph);

    for(let i = 105; i <= 200; i+=5){
        const answer = document.createElement("div");
        answer.textContent = output.answer;
        answer.className = "kata" + output.number;
        answer.style.width = i + "px";
        main.appendChild(answer);
    }
    return output;
}

function kataTwentyOne() {
    const output = {
        description: "21. display 20 solid gray rectangle 20px high and width of array element",
        number: "20",
        answer: "",
        numElements: 20,
    }
    const paragraph = document.createElement("div");
        paragraph.textContent = output.description;
        paragraph.className = "problems"; 
        main.appendChild(paragraph);

    for(let i = 0; i < output.numElements; i++){
        const answer = document.createElement("div");
        answer.textContent = output.answer;
        answer.className = "kata" + output.number;
        answer.style.width = sampleArray[i] + "px";
        main.appendChild(answer);
    }
    return output;
}

function kataTwentyTwo() {
    const output = {
        description: "22. display 20 solid gray rectangle 20px high and width of array element alternating red and gray",
        number: "22",
        answer: "",
        numElements: 20,
    }
    const paragraph = document.createElement("div");
        paragraph.textContent = output.description;
        paragraph.className = "problems"; 
        main.appendChild(paragraph);

    for(let i = 0; i < sampleArray.length; i++){
        const answer = document.createElement("div");
        answer.textContent = output.answer;
        answer.className = "kata" + output.number;
        answer.style.width = sampleArray[i] + "px";
        if(i%2===0){
            answer.style.backgroundColor = "gray";
        }else{
            answer.style.backgroundColor = "red";
        }
        main.appendChild(answer);
    }
    return output;
}

function kataTwentyTwo() {
    const output = {
        description: "22. display 20 solid gray rectangle 20px high and width of array element alternating red and gray",
        number: "22",
        answer: "",
        numElements: 20,
    }
    const paragraph = document.createElement("div");
        paragraph.textContent = output.description;
        paragraph.className = "problems"; 
        main.appendChild(paragraph);

    for(let i = 0; i < sampleArray.length; i++){
        const answer = document.createElement("div");
        answer.textContent = output.answer;
        answer.className = "kata" + output.number;
        answer.style.width = sampleArray[i] + "px";
        if(i%2===0){
            answer.style.backgroundColor = "gray";
        }else{
            answer.style.backgroundColor = "red";
        }
        main.appendChild(answer);
    }
    return output;
}

function kataTwentyThree() {
    const output = {
        description: "23. display 20 solid gray rectangle 20px high and width of array element red if even width or grey if odd width",
        number: "22",
        answer: "",
        numElements: 20,
    }
    const paragraph = document.createElement("div");
        paragraph.textContent = output.description;
        paragraph.className = "problems"; 
        main.appendChild(paragraph);

    for(let i = 0; i < sampleArray.length; i++){
        const answer = document.createElement("div");
        answer.textContent = output.answer;
        answer.className = "kata" + output.number;
        answer.style.width = sampleArray[i] + "px";
        if(sampleArray[i]%2===0){
            answer.style.backgroundColor = "red";
        }else{
            answer.style.backgroundColor = "gray";
        }
        main.appendChild(answer);
    }
    return output;
}

runKatas(kataOne, kataTwo, kataThree, kataFour, kataFive, kataSix, kataSeven, kataEight, kataNine, kataTen, kataEleven, kataTwelve, kataThirteen, kataFourteen, kataFifteen, kataSixteen, kataSeventeen, kataEighteen)
kataNineteen();
kataTwenty();
kataTwentyOne();
kataTwentyTwo();
kataTwentyThree();
//append main to body to be written to the dom
document.body.appendChild(main);