import { LexicalAnalyser } from './LexicalAnalyser';
import { parse } from './parser';


const lexicalAnalyser = new LexicalAnalyser();
window.onload = (() => {
    const button = document.getElementById('parse');
    button.onclick = () => {
        console.log('parse');
        const tokens = lexicalAnalyser.getTokens('156 + 6')
        parse(tokens);
        console.log(tokens)
    }
});