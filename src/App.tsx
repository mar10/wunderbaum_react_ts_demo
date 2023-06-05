import {useEffect} from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'wunderbaum/dist/wunderbaum.css'
import './App.css'

import {Wunderbaum} from 'wunderbaum'

function createFibonacciTree(n: number): any {
  if (n < 2) {
    return { title: "Node " + n }
  }
  return {
    title: "Node " + n, expanded: true, children: [
      createFibonacciTree(n - 1),
      createFibonacciTree(n - 2),
    ]
  };
}

function App() {
  useEffect(() => {
    let targetElement = document.getElementById("demo-tree") as HTMLDivElement;
    let headerElement = targetElement.querySelector("div.wb-header");
    if (headerElement) {
      return;
    }
    new Wunderbaum({
      id: "demo",
      element: targetElement,
      source: [
        createFibonacciTree(9)
      ],
      debugLevel: 4,
      edit: undefined,
      filter: undefined,
      grid: undefined
    });
  });
  return (
    <div id="demo-tree"></div>
  );
}

export default App;
