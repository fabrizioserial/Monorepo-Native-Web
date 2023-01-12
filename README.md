# 🚧️ Monorepo ReactJs & React Native 🚧

This repository is a monorepo project which contains two frontends - one in React Native and the other in React Js. The unique aspect of this project is the use of React Native for Web, which allows developers to write code in React Native and compile it for both mobile and web without having to write the same code twice.
## Project structure

---

```angular2html
├── packages
│   ├── app
│   │   └── package.json
│   ├── web
│   │   └── package.json
│   └── mobile
│       └── package.json
├── package.json
```

The repository has a packages folder, which contains three projects. The app folder contains code that is shared between the two frontends, the web folder contains the code for the web frontend, and the mobile folder contains the code for the mobile frontend.


## How to work with this kind of project
 
---

Best practices for monorepos that use React Native for Web are not widely documented. Therefore, I have created this workflow using the RN for Web documentation, my experience, and feedback from other developers.

The app folder is where we will work. All components, screens, hooks, configurations, etc. that will be shared between the platforms should be written here. In the mobile and web folders, we import an entry component to the index.jsx file from the app folder. If we need to write code that is specific to a platform, we can use the following convention:

```markdown
└── packages
    └── app
        └── components
            └── CustomComponent
                ├── CustomComponent.web.jsx
                ├── CustomComponent.android.jsx
                └── CustomComponent.ios.jsx
```

## How to run the project

---

1. Clone the project
2. run `yarn install`
3. run `yarn web:start` to run the web frontend
4. the page will be exposes to [http://localhost:3000](http://localhost:3000)

To run the React Native app you can do it with android or IOs. I recommend to set up the environment to run the project with the React Native Documentation.
Once you have the environment set up, you can run the project with the following commands:

`yarn android:metro`
and then, in another console run `yarn android:start`

## Why use this approach?

---

The main advantage of this approach is that we can write code once and compile it for both platforms. This allows us to have a single codebase for both platforms, which makes it easier to maintain and develop new features.

## Future Improvements

---
