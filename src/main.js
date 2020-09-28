import { LexicalAnalyser } from './LexicalAnalyser';
import { parse } from './parser';
import { Evaluator } from './Evaluator';

const lexicalAnalyser = new LexicalAnalyser();
const evaluator = new Evaluator();
window.onload = (() => {
    const button = document.getElementById('parse');
    button.onclick = () => {
        const textBox = document.getElementById('textBox');
        const tokens = lexicalAnalyser.getTokens(textBox.value);
        const abstractSyntaxTree = parse(tokens);
        const output = evaluator.evaluateExpression(abstractSyntaxTree);
        const heading = document.getElementById('outputNode');
        heading.innerHTML = output;
    }
});