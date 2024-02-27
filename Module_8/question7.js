
// 7. Complete the above tasks with async/await.
const fetchData = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users');
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
}

setTimeout(async () => {
    try {
        const result = await fetchData();
        console.log(result.data);
    } catch (error) {
        console.log("error " + error);
    }
}, 2000);