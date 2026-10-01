async function createUser() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const users = {
        name: 'John',
        age: 30,
        email: 'John@example.com'
    }
    fetch(url, {
        method: 'POST',
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(users)
    }).then((response) => {
        return response.json()
    })
    const result = await response.json()
    JSON.parse(result)
    console.log(response.age)
}
createUser()