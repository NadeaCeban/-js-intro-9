// TASK-PART-1
class Player {
    constructor(nickName, score) {
        this.nickName = nickName;
        this.score = score;
    }
    getInfo() {
        return `${this.nickName}'s score is ${this.score}.`;
    }
    attack(player) {
        this.score++;
        player.score--;
    console.log(`${this.nickName} attacking >>>> ${player.nickName}`)
    
    }
    damage() {
        this.score--;
        console.log(`${this.nickName} damaged by - 1`)
    }
}
// TASK-PART-2
class SuperPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }
    superAttack(player) {
        this.score += 2;
        player.score -= 2;
    }
}
// TASK-PART-3
class HeroPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }
    heal(player) {
        player.score++;
    }
}
// TASK-PART-4
const player1 = new Player('Player 1', 5);
const player2 = new Player('Player 2', 5);
const superPlayer = new SuperPlayer('Super Player', 3);
const heroPlayer = new HeroPlayer('Hero Player', 10);
// TASK-PART-5

player1.attack(player2);
player1.attack(superPlayer);
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);
heroPlayer.heal(player1);
heroPlayer.heal(player2);
player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);
player1.damage();
player2.damage();
// TASK-PART-6
console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(superPlayer.getInfo());
console.log(heroPlayer.getInfo());






console.log(`/n------------------------------------------n/`);

function Player(nickName, score) {
    this.nickName = nickName;
    this.score = score;
}
Player.prototype.getInfo = function () {
    return `${this.nickName}'s score is ${this.score}.`;
};
Player.prototype.attack = function (player) {
    this.score++;
    player.score--;
};
Player.prototype.damage = function () {
    this.score--;
};
// TASK-PART-2
function SuperPlayer(nickName, score) {
    Player.call(this, nickName, score);
}
SuperPlayer.prototype = Object.create(Player.prototype);
SuperPlayer.prototype.constructor = SuperPlayer;
SuperPlayer.prototype.superAttack = function (player) {
    this.score += 2;
    player.score -= 2;
};
// TASK-PART-3
function HeroPlayer(nickName, score) {
    Player.call(this, nickName, score);
}
HeroPlayer.prototype = Object.create(Player.prototype);
HeroPlayer.prototype.constructor = HeroPlayer;
HeroPlayer.prototype.heal = function (player) {
    player.score++;
};
// TASK-PART-4
let player1 = new Player('Player 1', 5);
let player2 = new Player('Player 2', 5);
let superPlayer = new SuperPlayer('Super Player', 3);
let heroPlayer = new HeroPlayer('Hero Player', 10);
// TASK-PART-5
// Execute actions
player1.attack(player2);
player1.attack(superPlayer);
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);
heroPlayer.heal(player1);
heroPlayer.heal(player2);
player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);
player1.damage();
player2.damage();
// TASK-PART-6
console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(superPlayer.getInfo());
console.log(heroPlayer.getInfo());