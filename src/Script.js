<script>
        // Функція, яка додає символ до рядка результату
        function addToResult(value) {
            document.getElementById('result').value += value;
        }

        // Функція, яка очищає рядок результату
        function clearResult() {
            document.getElementById('result').value = '';
        }

        // Функція, яка обчислює результат
        function calculateResult() {
            var result = eval(document.getElementById('result').value);
            document.getElementById('result').value = result;
        }
    </script>