var heroes = ['Anduin', 'Garrosh', 'Guldan', 'Jaina', 'Malfurion', 'Rexxar', 'Thrall', 'Uther', 'Valeera'],
    options = [],
    totalOptions = 3;

var pick = function() {
    generate();

    document.getElementById('first').style.backgroundImage = 'url(\'images/heroes/' + heroes[options[0]] + '.png\')';
    document.getElementById('second').style.backgroundImage = 'url(\'images/heroes/' + heroes[options[1]] + '.png\')';
    document.getElementById('third').style.backgroundImage = 'url(\'images/heroes/' + heroes[options[2]] + '.png\')';
};

var generate = function() {
    var number = randomize();

    options.push(number);

    while (options[0] == number) {
        number = randomize();
    }

    options.push(number);

    while (options[0] == number || options[1] == number) {
        number = randomize();
    }

    options.push(number);
};

var randomize = function() {
    return Math.round(Math.random() * (heroes.length - 1));
};
