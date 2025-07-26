document.addEventListener("DOMContentLoaded", function calculation() {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            switch (button.id) {
                case "cancel":
                    expression = "";
                    break;
                case "delete":
                    expression = expression.slice(0, -1);
                    break;
                case "equal":
                    try {
                        expression = expression
                        expression = eval(expression).toString();
                    } catch (e) {
                        expression = "Error";
                    }
                    break;
                default:
                    if (value === "()") {
                        const open = (expression.match(/\(/g) || []).length;
                        const close = (expression.match(/\)/g) || []).length;
                        expression += open > close ? ")" : "(";
                    } else {
                        expression += value;
                    }
            }

            display.value = expression;
        });
    });
});
