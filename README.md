# ShoppingCard

## Requirements

- You have to use `functional` components
- Routes required (home)
  - `'localhost:3000/'`<br />
  When you open, you can browse the T-shirts
  - `'localhost:3000/tshirt/1'`<br />
  When you open, you can see the details of one t-shirt
  - `'localhost:3000/checkout'`<br />
  When you open, you can see the shopping cart
  - `'localhost:3000/login'`<br />
  When you open, you can see the login screen

## Project structure

```
shoppingcard/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ pages/
│  │  ├─ home/
│  │  ├─ tshirt/
│  │  ├─ checkout/
│  │  ├─ login/
│  │  ├─ password-reset/
│  │  ├─ register/
│  ├─ components/
│  │  ├─ header/
│  │  ├─ footer/
│  │  ├─ routing/
│  │  ├─ tshirtCard/
│  │  ├─ tshirtDetails/
│  │  ├─ checkoutSummary/
│  ├─ redux/
│  │  ├─ tshirts/
│  │  ├─ shoppingCart/
│  │  ├─ index.js
│  ├─ utilities/
│  ├─ hooks/
│  ├─ index.js
├─ package.json
├─ .gitignore

```

## UI Flow Login

![The routing diagram](/docs/routing-diagram.png)