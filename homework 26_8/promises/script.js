const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 2000);
    });
};

fetchData().then(console.log); // "Data received" (sau 2 giây)