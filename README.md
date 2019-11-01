
# React

## Comment le défnir

> React est une librairie de composant.

C'est une façon des decoupler une application en composants plus ou moins fonctionnels.
* Il implémente l'idée de la "norme web-components"

Particularité : Utilisation de JSX `XML in JS`

```jsx
import React from 'react';

function H1(){
    return (
        'Hello World';
    );
}

const Title = () => {
    return (
        <React.Fragment>
            <h1></h1> {/* Element HTML -> React.createEment( 'h1',....) */}
            <H1></H1>  {/* Component HTML : Attention MAJ */}
        </React.Fragment>
    );
}
```

## Initialisation

```

npx create-react-app my-app

```

* public : static assets

Laucn Dev Mode : `npm start`
Launch Build : `npm run build`

## Definition de composant

* SMART class component
* DUMB function component (a partir React 16.8 -> Tendance seulement function)

> C'est du JavaScript : Penser javaScript

* On passe les infos Top-Down par des parameères appelés 'props'

## Tooling 

## Ecosysteme

