class ParenthesisCheck {
  constructor() {
    this.stack = [];
  }
  match(a, b) {
    if (a === "{" && b === "}") return true;
    else if (a === "[" && b === "]") return true;
    else if (a === "(" && b === ")") return true;
  }
  check(expr) {
    this.stack = [];
    if (expr.length <= 0) {
      return "Please provide exporession to check";
    }
    for (let i = 0; i < expr.length; i++) {
      let val = expr[i];
      if (val === "{" || val === "[" || val === "(") {
        this.stack.push(val);
      } else if (val === "}" || val === "]" || val === ")") {
        if (this.stack.length <= 0) {
          return "Rigth Parenthesis are more than the left parenthesis";
        } else {
          let temp = this.stack.pop();
          if (!this.match(temp, val)) {
            return "Mismatch in parenthesis";
          }
        }
      }
    }
    if (this.stack.length <= 0) {
      return "Balanced";
    } else {
      return "Left Parenthesis are more than right";
    }
  }
}
const obj = new ParenthesisCheck();
const expr = "({[]})";
const expr1 = "(((";
console.log(obj.check(expr));
console.log(obj.check(expr1));
