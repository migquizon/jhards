console.log("setTimeout and fetch execution");

function display(data) {
  console.log(data);
}

function printHello() {
  console.log("Hello");
}

function blockFor300ms() {
  
}

setTimeout(printHello, 0);

const futureData = fetch("https://tiktok.com/will");
futureData.then(display);

blockFor300ms();
console.log("Me First!");