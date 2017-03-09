document.addEventListener('DOMContentLoaded', function(){
    console.log('Hello!');

    var Die = function(value){
        this.value = value;
        this.insertDiv();
        this.roll();
    };

    Die.prototype.insertDiv = function(){
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        var rollButton = document.getElementById('roll');
        rollButton.addEventListener('click', this.roll.bind(this));
        this.div.addEventListener('click', this.roll.bind(this));
        this.div.addEventListener('dblclick', this.remove.bind(this));
    };

    Die.prototype.roll = function(){
        this.div.innerHTML = Math.floor(Math.random() * 6) + 1;
        this.value = this.div.innerHTML;
        console.log('my value is: ' + this.value);
    };

    Die.prototype.remove = function(){
        this.div.remove();
    };

    var sumDice = function(){
        var sum = 0;
        var allDivs = document.getElementsByTagName('div');
        console.log('There are ' + allDivs.length + ' dies on the page');
        for(var i = 0; i < allDivs.length; i++){
            var value = allDivs[i].innerHTML;
            console.log('value: ' + value);
            sum += Number(value);
        };
        alert('The sum is: ' + sum);
    };

    var generateButton = document.getElementById('generate');
    generateButton.onclick = function(){
        var newDie = new Die(Math.floor(Math.random() * 6) + 1);
    };

    var sumButton = document.getElementById('sum');
    sumButton.onclick = function(){
        sumDice();
    }
});