var playerName = prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    alert("welcome to Robot Gladiators!")

    while (playerHealth > 0) {
        enemyHealth = enemyHealth - playerAttack;
        alert(playerName + " attacked " + enemyName + "! " + enemyName + " has " + enemyHealth + " health remaining." );
        if (enemyHealth <= 0) {break};
        playerHealth = playerHealth - enemyAttack;
        alert(enemyName + " attacked " + playerName + "! " + playerName + " has " + playerHealth + " health remaining." );
        
    }
    if (playerHealth>enemyHealth) {alert("The battle is over! " + playerName + " won!")};
    if (enemyHealth>playerHealth) {alert("The battle is over! " + enemyName + " won!")};
};




fight();