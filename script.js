class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackMessage = "";
        switch (this.type) {
            case "mago":
                attackMessage = "atacou usando magia";
                break;
            case "guerreiro":
                attackMessage = "atacou usando espada";
                break;
            case "monge":
                attackMessage = "atacou usando artes marciais";
                break;
            case "ninja":
                attackMessage = "atacou usando shuriken";
                break;
        }
        return `O ${this.type} ${attackMessage}`;
    }
}

let hero;

document.getElementById("heroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("heroName").value;
    const age = document.getElementById("heroAge").value;
    const type = document.getElementById("heroType").value;

    hero = new Hero(name, age, type);
    
    document.getElementById("heroInfo").innerText = `Herói: ${hero.name}, ${hero.age} anos, ${hero.type}`;
    
    document.getElementById("attackButton").style.display = "block";


    document.getElementById("heroForm").reset();
});

document.getElementById("attackButton").addEventListener("click", function() {
    const result = hero.attack();
    document.getElementById("attackHistory").innerHTML += `<p>${result}</p>`;
});
