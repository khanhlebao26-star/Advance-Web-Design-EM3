class Toys {
    constructor(name) {
        // Tùy chọn: Ngăn tạo đối tượng trực tiếp từ class Toys (giả lập Abstract Class)
        if (new.target === Toys) {
            throw new Error("Không thể khởi tạo trực tiếp lớp Toys!");
        }
        this.name = name;
    }

    speak() {
        throw new Error("Phương thức speak() phải được định nghĩa ở lớp con!");
    }
}

// Bỏ constructor dư thừa, JS tự động gọi super(name)
class RobotToy extends Toys {
    speak() {
        console.log(`${this.name} says beep beep book! I am a robot!`);
    }
}

class TeddyBearToy extends Toys {
    speak() {
        console.log(`${this.name} says hug me! I am cuddle!`);
    }
}

class DinosaurToy extends Toys {
    speak() {
        console.log(`${this.name} says ROOR!`);
    }
}

// Khởi tạo các đối tượng
const toys = [
    new RobotToy("Rusty"),
    new TeddyBearToy("Fluffy"),
    new DinosaurToy("Rex")
];

// Thực thi
toys.forEach(toy => toy.speak());