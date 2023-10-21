let getinpval = document.getElementById('inp');

function getnum(value) {
    if ('+-*/.%'.includes(value) && '+-*/.%'.includes(getinpval.value[getinpval.value.length - 1])) {
        getinpval.value = getinpval.value.slice(0, -1) + value;
    } else {
        getinpval.value += value;
    }
}
function equal() {
    getinpval.value = eval(getinpval.value);
}

function delall() {
    getinpval.value = '';
}

function clast() {
    let inpvalue = getinpval.value;
    getinpval.value = inpvalue.slice(0, -1);
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};