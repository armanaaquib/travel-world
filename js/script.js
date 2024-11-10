
const setMinValue = () => {
    const today = new Date();
    today.setDate(today.getDate());
    document.getElementById("startDate").min = today.toISOString().slice(0, 10);

    const nextDay = new Date();
    nextDay.setDate(today.getDate() + 1);
    document.getElementById("endDate").min = nextDay.toISOString().slice(0, 10);
}

const updateEndDate = () => {
    const startDate = document.getElementById("startDate");
    const selectedDate = new Date(startDate.value);
    selectedDate.setDate(selectedDate.getDate() + 1);

    const endDate = document.getElementById("endDate");
    endDate.min = selectedDate.toISOString().slice(0, 10);

    selectedDate.setDate(selectedDate.getDate() + 7);
    endDate.value = selectedDate.toISOString().slice(0, 10);
}

document.getElementById("booking-form").addEventListener("submit", (event) => {
    event.preventDefault();   
    alert("Booking successful!");
});
