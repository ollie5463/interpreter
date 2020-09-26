import { LexicalAnalyser } from './LexicalAnalyser';


const lexicalAnalyser = new LexicalAnalyser();
window.onload = (() => {
    const button = document.getElementById('parse');
    button.onclick = () => {
        console.log('parse');
        lexicalAnalyser.getTokens('156 6')
    }
});