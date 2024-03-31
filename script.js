let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerphone = document.getElementById("customerphone").value;
  if (customerphone && customerphone.length === 10 && !isNaN(customerphone)) {
    const customer = { phone: customerphone };
    queue.push(customerphone);
    document.getElementById("customerphone").value = ""; // Clear the input
    updateQueueDisplay();
  } else if (customerphone.length !== 10 || isNaN(customerphone)) {
    alert('กรุณาใส่เบอร์ติดต่อให้ถูกต้อง');
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    alert("Next customer: " + queue.shift());
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "<h3>Queue</h3>";
  queue.forEach((customer, index) => {
    const randomColor = getRandomColor();
    queueList.innerHTML += `<p style="background-color: ${randomColor};">${
      index + 1
    }. ${customer}</p>`;
  });
}
