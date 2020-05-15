import { getAddress, getDomain } from "./src/example";

const btnGetAddress = document.getElementById("btnGetAddress");
const btnGetDomain = document.getElementById("btnGetDomain");
const console = document.getElementById("console");

btnGetAddress.addEventListener("click", async () => {
  printMessage("Getting address of 0xcert.eth domain.");
  try {
    const address = await getAddress();
    printMessage(`Resolved to: ${address}`);
  } catch (e) {
    printError(e);
  }
});

btnGetDomain.addEventListener("click", async () => {
  printMessage(
    "Getting domain of 0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa address."
  );
  try {
    const domain = await getDomain();
    printMessage(`Resolved to: ${domain}`);
  } catch (e) {
    printError(e);
  }
});

function printMessage(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = message;
  console.prepend(div);
}

function printError(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = "Error: " + message;
  div.className = "error";
  console.prepend(div);
}
