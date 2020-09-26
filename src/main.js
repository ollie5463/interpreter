import { LexicalAnalyser } from './LexicalAnalyser';
import { parse } from './parser';
import { Evaluator } from './Evaluator';


const lexicalAnalyser = new LexicalAnalyser();
const evaluator = new Evaluator();
window.onload = (() => {
    const button = document.getElementById('parse');
    button.onclick = () => {
        console.log('parse');
        const tokens = lexicalAnalyser.getTokens('156 + 6 + 6');
        const abstractSyntaxTree = parse(tokens);
        console.log('tokens: ', tokens)
        console.log('abstractSyntaxTree: ', abstractSyntaxTree)
        const output = evaluator.evaluateExpression(abstractSyntaxTree);
        console.log('output: ', output)
    }
});