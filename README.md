<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

# [My live link](https://travelatravelapp.netlify.app/)

## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Summary

The project is made with Web Components. The API I used is my own API that I created with Insomnia App. You can check that below at the API Assignment Section for more details of every request.

Features

Click on Places to Travel in the Nav Menu - it will list the corresponding places to travel as cards. I rendered them with async await.

Click on Add Destination from the Nav Menu - The form has a validator and the inputs aswell. The button will not work unless you fill all the inputs and you respect the Min or Max characters that are required. If the form is completely filled and it's working, the new card can be seen in the Places to Travel page. I made this working using Ajax and making a Post Request.

I used Lion Web Components, for inputs, forms and buttons. Validator that requires Romania for the Location's name.

You can see the demo by clicking the link. https://travelatravelapp.netlify.app/

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## API assignment

## Get all the locations to travel

### Request

```
GET 'https://devschool-2020.firebaseio.com/Vlad/places.json'
```

### Response

```
{
  "-M_tfKGpztCbG-x4MTdZ": {
    "country": "USA",
    "description": "City that never sleeps",
    "imageUrl": "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "name": "New York"
  },
  "-M_tfNVzMAa3KUlP8wUE": {
    "country": "Romania",
    "description": "Little Paris",
    "imageUrl": "https://images.unsplash.com/photo-1609670275055-ba1c0c246a63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=636&q=80",
    "name": "Bucuresti"
  },
  "-M_tfPqehI3XJsEbOn7-": {
    "country": "Romania",
    "description": "Most beautiful city in Romania",
    "imageUrl": "https://images.unsplash.com/photo-1558253347-fb1128610003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    "name": "Brasov"
  },
  "-M_tfRyRHiY2s9YMfs_g": {
    "country": "Japan",
    "description": "The largest city in the world",
    "imageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80",
    "name": "Tokyo"
  }
}
```

## Add new location

### Request

```
'{
    "country": "USA",
    "description": "City that never sleeps",
    "imageUrl": "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "name": "New York"
  }`
   'https://devschool-2020.firebaseio.com/Vlad/places.json'
```

### Response

```
{
  "name": "-M_tfKGpztCbG-x4MTdZ"
}
```

## PUT, updated a key in the Object, ex (Iasi -> Brasov) url(https://devschool-2020.firebaseio.com/Vlad/places/-M_tfNVzMAa3KUlP8wUE.json)

### Request

```
    {
      "country": "Romania",
      "description": "Most beautiful city in Romania",
      "imageUrl": "https://images.unsplash.com/photo-1558253347-fb1128610003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      "name": "Iasi"
    },
```

### Response

```
    {
      "country": "Romania",
      "description": "Most beautiful city in Romania",
      "imageUrl": "https://images.unsplash.com/photo-1558253347-fb1128610003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      "name": "Brasov"
    },
```

### Patch Request for imageURL -- url(https://devschool-2020.firebaseio.com/Vlad/places/-M_tfPqehI3XJsEbOn7-.json)

### Request

```
    {
      "country": "Romania",
      "description": "Most beautiful city in Romania",
      "imageUrl": "https://images.unsplash.com/photo-1613667514864-3cfc757961cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "name": "Brasov"
    },
```

### Response

```
  {
    "country": "Romania",
    "description": "Most beautiful city in Romania",
    "imageUrl": "https://images.unsplash.com/photo-1558253347-fb1128610003?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    "name": "Brasov"
  },
```

### Delete a specific key (example Tokyo)

```
 https://devschool-2020.firebaseio.com/Vlad/places.json
```

### Response

```
null
```
