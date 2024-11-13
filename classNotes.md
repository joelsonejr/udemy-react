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
  
  React.render(<App />, document.getElementById("root"));
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



### 35 . Components as Building Blocks

- React applications are entirely made out of components.

- React renders a view for each component, and all those views toghther make up the UI.

- Each componente has it's own data, logic and appearence.

- Components can be reused, and nested inside other components.

  

### 36. Creating and Reusing a Component

- In React, we create components using functions.

- The function name has to start with an upper case letterr.

- The funciton must return some markup (ussualy in form of a jsx)

  ```react
  function Pizza() {
  	return <h2>Pizza</h2>
  }
  ```

- For the component to be displayed in the screen, it should be used inside of the component wich is being redered on the screen. 

  ```react
  // Arquivo ./src/index.js
  
  import React from "react";
  import ReactDOM from "react-dom/client";
  
  const App = () => {
    return <h1>Hello React!</h1> <Pizza />;
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
      <App />
  );
  ```

  

- Each component can only return one element. So, in order to avoid an error, the return of the App component shoul de encapsulated inside of a *div* .

- Once the *Pizza* component is nested inside *App* it will be presented on the screen. Pizza is nested inside of App.

- What should be nested is the component, and not it's declaration. 

  ```react
  // Arquivo ./src/index.js
  
  import React from "react";
  import ReactDOM from "react-dom/client";
  
  const App = () => {
    return(
        <div>
            <h1>Hello React!</h1> 
            <Pizza />
        </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
      <App />
  );
  ```

  

  - Below, more data is added to the pizza component. This data was copied from the file data.js

  ```typescript
  function Pizza() {
  	return <div>
  		<img src="pizzas/spinaci.jpg" alt="Pizza spinaci />
  		<h2>Pizza Spinachi</h2>
  		<p>Tomato, mozarella, spinach, and ricotta cheese</p>
  	</div>
  }
  ```

  

- The most basic (and wrong) way of using a component, is just by manually copying it several times, into the 

  *App* .

  ```typescript
  import React from "react";
  import ReactDOM from "react-dom/client";
  
  const App = () => {
    return(
        <div>
            <h1>Hello React!</h1> 
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
  };
  ```

  

  

