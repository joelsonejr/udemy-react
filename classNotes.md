# **The Ultimate React Course (2024)**



## Section 5 : Working with Components, Props, and JSX.

### 33. Rendering  the Root Component and Strict Mode

```` react
// Arquivo ./src/index.js
//React 18+

import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello React!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

````

- "index.js" é utilizado pelo WebPack, como sendo o ponto inicial do projeto. Por isso da necessidade de se criar esse arquivo, com esse nome. 

- Os imports no início do arquivo, são as bibliotecas básicas necessárias para o projeto. 

- A seguir, tem o componente App, dentro do qual será inserido o código da aplicação. O nome não precisa ser esse, mas o componente deve ser iniciado por letra maiúscula.

- É criada a variável root, a qual recebe a div de id  *root*  que está em *./public/index.html*. Será dentro dessa div que o React irá renderizar a aplicação.

- Posteriormente, é utilizado o método *render* , para renderizar a aplicação.

- Essa é a forma de renderizar a aplicação para o React 18+.

-  No caso do React 17- o código seria:

  ```react
  // Arquivo ./src/index.js
  
  import React from "react";
  import ReactDOM from "react-dom";
  
  const App = () => {
    return <h1>Hello React!</h1>;
  };
  
  React.render(<App />);
  ```

  

- Ao invés de renderizar o *App* como um root component, pode-se utilizar o *strict mode*  , simplesmente envolvendo o *App* em um *strict mode component*. Dessa forma, durante o desenvolvimento, o *strict mode* renderizará o componente duas vezes, a fim de verificar se existem bugs, e verificar se estão utilizadas versões ultrapassadas da 

  *React API* .

```react
// Arquivo ./src/index.js
//React 18+

import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello React!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

