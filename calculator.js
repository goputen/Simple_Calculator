


    function display(value) {

        document.getElementById('result').value += value;
    }
    function calculate() {
        document.getElementById('result').value = eval(document.getElementById('result').value)
    }
    function clean() {
        document.getElementById('result').value = 0;
    }

