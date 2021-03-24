# react-product-fruits
A React component to use Product Fruits in React apps.

## Installation
```bash
npm install react-product-fruits --save
```

## How to use

Import ProductFruits and use it as shown in the example.

```js
import React from 'react';
import ProductFruits from 'react-product-fruits';

export class App extends React.Component {
  render () {
    const { appUser } = this.props;
    
    const userInfo = {
      username: appUser.username,
      email: appUser.email,
      firstname: appUser.firstname,
      lastname: appUser.lastname,
      signUpAt: appUser.signUpAt,
      role: appUser.role
    };

    return (
      <div>
        <ProductFruits projectCode="YOUR_PROJECT_CODE" language="ISO-2 CODE OF LOCALIZATION LANGUAGE" { ...userInfo } />
      </div>
    );
  }
}
```

It loads the Product Fruits code snippet and passes required information to it. See https://productfruits.com/ for more information.
