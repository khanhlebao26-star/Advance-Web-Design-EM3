const API_URL = "dsadsa"

class Student {
    constructor(
        id,
        name,
        avatar,
        email,
        age,
        major,
        gpa,
    ) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.email = email;
        this.age = age;
        this.major = major;
        this.gpa = gpa
    }
}

class StudentManager {
    constructor(apiUrl){
        this.apiUrl = apiUrl;
        this.students = [];
    }

    show(students){
        const StudentList = document.getElementById("studentList");
        StudentList.innerHTML = "";
        students.forEach(student => {
            StudentList.innerHTML += `

                <div class="student-card">
                    <img src="${student.avatar}">

                    <div class="student-info">
                        <p class="student-name">${student.name}</p>
                        <p class="student-email">${student.email}</p>
                        <p class="student-age">${student.age}</p>
                        <p class="student-major">${student.major}</p>
                        <p class="student-gpa">${student.gpa}</p>
                    </div>
                </div>
            `;
        });

    }

    getStudent() {
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Cannot get all students")
                }
            })
            .then(data => {
                this.students = data.map(item => {
                    item.id,
                    item.name,
                    item.email,
                    item.age,
                    item.major,
                    item.gpa
                })
                this.show(this.students);
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    addStudent(student){
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(student)
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error("Cannot add new student")
                }
            })
            .then(data => {
                this.getStudent();
                resolve(data);
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    updateStudent(id, student){
        return new Promise((resolve, reject) => {
            fetch(`${this.apiUrl}/${id}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(student)
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error("Cannot update  student")
                }
            })
            .then(data => {
                this.getStudent();
                resolve(data);
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    deleteStudent(id){
        return new Promise((resolve, reject) => {
            fetch(`${this.apiUrl}/${id}`, {
                method: "DELETE",
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error("Cannot delete new student")
                }
            })
            .then(data => {
                this.getStudent();
                resolve(data);
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    searchStudent(keyword){
        const result = this.products.filter(student => {
            return student.name.toLowerCase().includes(keyword.toLowerCase());
        })
        this.show(result)
    }
}

const studentManager = new StudentManager(API_URL);

studentManager.getStudent();

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("studentId").value;
    const name = document.getElementById("name").value;
    const avatar = document.getElementById("avatar").value;
    const email = document.getElementById("email").value;
    const age = Number(document.getElementById("age").value);
    const major = Number(document.getElementById("major").value);
    const gpa = Number(document.getElementById("gpa").value);

    const student = new Product(id, name, avatar, email, age, major, gpa);

    console.log(student);

    if (id) {
        await productManager.updateProduct(id, student);
    } else {
        await productManager.addProduct(student);
    }

    studentFormForm.reset();
    document.getElementById("studentId").value = "";
})
