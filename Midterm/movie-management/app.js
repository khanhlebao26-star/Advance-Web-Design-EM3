const API_URL = "https://6aaa43aaff4dd5698b4e4309.mockapi.io/films";

class Phim {
    constructor(
        id,
        name,
        image,
        description,
        duration,
        releaseYear,
        price
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.duration = duration;
        this.releaseYear = releaseYear;
        this.price = price;
    }

}

class QuanLyPhim {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.phims = [];
    }

    getPhims() {
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            "Không lấy data được thầy ơi!"
                        );
                    }
                    return response.json();
                })
                .then(data => {
                    this.phims = data.map(item => {
                        return new Phim(
                            item.id,
                            item.name,
                            item.image,
                            item.description,
                            item.duration,
                            item.releaseYear,
                            item.price
                        );
                    });
                    this.show(this.phims);
                    resolve(this.phims);
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    show(phims) {
        const phimList =
            document.getElementById("phimList");

        phimList.innerHTML = "";

        phims.forEach(phim => {

            phimList.innerHTML += `
                <div class="phim-card">

                    <img
                        src="${phim.image}"
                        alt="${phim.name}"
                    >

                    <div class="phim-info">

                        <h3 class="phim-name">
                            ${phim.name}
                        </h3>

                        <p class="phim-description">
                            ${phim.description}
                        </p>

                        <p class="phim-duration">
                            Thời lượng:
                            ${phim.duration} phút
                        </p>

                        <p class="phim-releaseYear">
                            Năm:
                            ${phim.releaseYear}
                        </p>

                        <button
                            class="xem-ngay"
                            type="button"
                            data-id="${phim.id}"
                        >
                            Xem Ngay
                        </button>

                    </div>

                </div>
            `;
        });
    }

    themPhim(phim) {
        return new Promise((resolve, reject) => {
            fetch(this.apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(phim)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            "Không thêm phim được"
                        );
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(
                        "Thêm phim thành công:",
                        data
                    );
                    this.getPhims();
                    resolve(data);
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    capNhatPhim(id, phim) {
        return new Promise((resolve, reject) => {
            fetch(`${this.apiUrl}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(phim)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            "Không cập nhật phim được"
                        );
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(
                        "Cập nhật thành công:",
                        data
                    );
                    this.getPhims();
                    resolve(data);
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    xoaPhim(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this.apiUrl}/${id}`, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            "Không xóa phim được"
                        );
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(
                        "Xóa thành công:",
                        data
                    );
                    this.getPhims();
                    resolve(data);
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    timPhim(keyword) {
        const result = this.phims.filter(phim => {
            return phim.name
                .toLowerCase()
                .includes(keyword.toLowerCase());
        });
        this.show(result);
    }

    suaPhim(id) {
        const phim = this.phims.find(
            phim => phim.id == id
        );

        if (!phim) {
            return;
        }

        document.getElementById("phimId").value =
            phim.id;

        document.getElementById("tenPhim").value =
            phim.name;

        document.getElementById("hinhAnh").value =
            phim.image;

        document.getElementById("moTa").value =
            phim.description;

        document.getElementById("thoiLuong").value =
            phim.duration;

        document.getElementById("namPhatHanh").value =
            phim.releaseYear;

        document.getElementById("gia").value =
            phim.price;

        const submitButton =
            document.querySelector(
                "#phimForm button[type='submit']"
            );

        submitButton.textContent =
            "Cập Nhật Phim";
    }

}

const quanLyPhim = new QuanLyPhim(API_URL);

quanLyPhim
    .getPhims()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

const phimForm =
    document.getElementById("phimForm");

phimForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        const id = document.getElementById("phimId").value;
        const name = document.getElementById("tenPhim").value;
        const image = document.getElementById("hinhAnh").value;
        const description = document.getElementById("moTa").value;
        const duration = Number(document.getElementById("thoiLuong").value);
        const releaseYear = Number(document.getElementById("namPhatHanh").value);
        const price = Number(document.getElementById("gia").value);

        const phim = new Phim(
            id,
            name,
            image,
            description,
            duration,
            releaseYear,
            price
        );

        console.log(
            "Phim từ form:",
            phim
        );

        if (id) {
            quanLyPhim.capNhatPhim(id,phim)
                .then(data => {
                    console.log(
                        "Update thành công:",
                        data
                    );
                    resetForm();
                })
                .catch(error => {
                    console.error(
                        error
                    );
                });
        } else {
            quanLyPhim.themPhim(phim).then(data => {
                console.log(
                    "Add thành công:",
                    data
                );
                    resetForm();
                })
                .catch(error => {
                    console.error(
                        error
                    );
                });
        }
    }
);

function resetForm() {
    phimForm.reset();
    document.getElementById("phimId").value = "";

    const submitButton =
        document.querySelector(
            "#phimForm button[type='submit']"
        );

    submitButton.textContent = "Thêm Phim";
}

const huyBtn = document.getElementById("huyBtn");

huyBtn.addEventListener("click", () => {
    resetForm();
});

const timKiem = document.getElementById("timKiem");

timKiem.addEventListener(
    "input",
    event => {
        const keyword =
            event.target.value;
        quanLyPhim.timPhim(
            keyword
        );

    }
);

const movieModal = document.getElementById("movieModal");
const closeModal = document.getElementById("closeModal");
const modalEdit = document.getElementById("modalEdit");
const modalDelete = document.getElementById("modalDelete");

let selectedMovieId = null;


const phimList = document.getElementById("phimList");

phimList.addEventListener("click", (event) => {

    const button = event.target.closest(".xem-ngay");

    if (!button) {
        return;
    }

    const id = button.dataset.id;

    console.log("Đã click Xem Ngay, ID:", id);

    const phim = quanLyPhim.phims.find(
        phim => phim.id == id
    );

    if (!phim) {
        console.log("Không tìm thấy phim");
        return;
    }

    selectedMovieId = phim.id;

    document.getElementById("modalImage").src =
        phim.image;
    document.getElementById("modalImage").alt =
        phim.name;
    document.getElementById("modalName").textContent =
        phim.name;
    document.getElementById("modalDescription").textContent =
        phim.description;
    document.getElementById("modalDuration").textContent =
        phim.duration;
    document.getElementById("modalYear").textContent =
        phim.releaseYear;
    document.getElementById("modalPrice").textContent =
        phim.price;

    movieModal.classList.add("active");
});

closeModal.addEventListener("click", () => {

    movieModal.classList.remove("active");

});

movieModal.addEventListener("click", (event) => {
    if (event.target === movieModal) {
        movieModal.classList.remove("active");
    }

});


modalEdit.addEventListener("click", () => {

    quanLyPhim.suaPhim(selectedMovieId);

    movieModal.classList.remove("active");

});


modalDelete.addEventListener("click", () => {

    const phim = quanLyPhim.phims.find(
        phim => phim.id == selectedMovieId
    );

    if (!phim) {
        return;
    }

    const confirmDelete = confirm(
        `Bạn có chắc muốn xóa phim "${phim.name}" không?`
    );

    if (!confirmDelete) {
        return;
    }

    quanLyPhim
        .xoaPhim(selectedMovieId)
        .then(() => {

            movieModal.classList.remove("active");

        })
        .catch(error => {

            console.error(error);

        });

});