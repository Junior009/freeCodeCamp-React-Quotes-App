import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState, useEffect} from "react";
import $ from "jquery";
import './index.css';
import {marked} from "marked";

const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }

];



const App = () =>{

  const [quote, setQuote] = useState({text:"", author: ""});

  const getRandomQuote = () => {
      const randomIndx = Math.floor(Math.random()*quotes.length);
      return quotes[randomIndx];
  }

  const loadQuotes = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  }

  useEffect(() => {

    loadQuotes();
  }, []);


  return(
    <div className='App'>
      <div id='quote-box'>
        <div id='text'>{quote.text}</div>
        <div id='author'>{quote.author}</div>
        <button id="new-quote" className='btn btn-primary' onClick={loadQuotes}>New Quote</button>
      </div>

    </div>
  );
}

//========================================= FCCMarkdownApp ===========================================
const initialMarkdown = `# Bem-vindo ao Markdown Previewer!

## Este é um sub-título (H2)
### E este é um sub-sub-título (H3)

Aqui está um link para [Google](https://www.google.com)

\`Código inline\` e um bloco de código:

\`\`\`
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

**Texto em negrito**

> Citação em bloco.

- Item de lista 1
- Item de lista 2
- Item de lista 3

![Logo do React](https://reactjs.org/logo-og.png)
`;

const MarkdownApp = () =>{

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
      setMarkdown(e.target.value);
  
  }

  useEffect(() => {

  }, []);


  return(
    <div className='markdown'>
       <textarea id='editor'
                  value={markdown}
                  onChange={handleChange}
                  className='textarea'
       >

       </textarea>
        <div id='preview' 
             className='preview'
             dangerouslySetInnerHTML={{__html: marked(markdown)}}
        >
        </div>
      </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarkdownApp />
  </React.StrictMode>
);
