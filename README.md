<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## [My live link](https://blissful-goldberg-ef0ff7.netlify.app)

## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

Welcome to TravelApp starter kit ! You will implement features for the app while learning about frontend development.

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Interacting with the Destionations API

The Destinations API provides the data for Travela.
It can be accessed [here](https://devschool-2020.firebaseio.com/ana/places.json).

### GET all destinations

### Request

```
curl -X GET 'https://devschool-2020.firebaseio.com/ana/places.json'
```

### Response

```
{
  "-M_Mjb_cvJCPzImAXFx1": {
    "country": "Thailand",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1583511416766-083ba12de77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "name": "Bangkok",
    "type": "city"
  },
  "-M_MjfNT-pyUFV8M2eOE": {
    "country": "France",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1507062916289-6af3d3e05386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "name": "Paris",
    "type": "city"
  },
  "-M_MjmcAV7-criS9kMh2": {
    "country": "United Kingdom",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1523304867125-2293c498e08a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "name": "London",
    "type": "city"
  },
  "-M_MjovaD-aIfjlxCYzP": {
    "country": "United Arab Emirates",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1577901051898-c174f226c8ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1044&q=80",
    "name": "Dubai",
    "type": "city"
  },
  "-M_Mjs4KbtawN_OqJBbg": {
    "country": "Turkey",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1581948355501-c721e309caa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "name": "Istanbul",
    "type": "city"
  },
  "-M_MjusZ9Hodrq7SC-rO": {
    "country": "The Republic of Singapore",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1249&q=80",
    "name": "Singapore",
    "type": "city"
  },
  "-M_MjxUUy15coFQD7ZDw": {
    "country": "United States of America",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1535892449425-d45bdcb2d016?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "name": "New York",
    "type": "city"
  },
  "-M_MjzMUG9s7CKcXePMn": {
    "country": "Japan",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
    "imageUrl": "https://images.unsplash.com/photo-1611401138000-237b6d8d746d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "name": "Tokyo",
    "type": "city"
  },
  "-MaYNc81BHFH-HWrFBnE": {
    "country": "Italy",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam.",
    "imageUrl": "https://images.unsplash.com/photo-1537799943037-f5da89a65689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80",
    "name": "Rome",
    "type": "City"
  }
}
```

## Get certain destination

### Request

```
curl -X GET 'https://devschool-2020.firebaseio.com/ana/places/placeId.json'
```

### Response

```
  {
    "country": "Italy",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam.",
    "imageUrl": "https://images.unsplash.com/photo-1537799943037-f5da89a65689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80",
    "name": "Rome",
    "type": "City"
  }
```

## Add a new destination

### Request

```
  curl -X POST -d '{
  "country": "Japan",
  "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis vitae totam quisquam, unde quasi.",
  "imageUrl": "https://images.unsplash.com/photo-1611401138000-237b6d8d746d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "name": "Tokyo",
  "type": "city"
  }' 'https://devschool-2020.firebaseio.com/ana/places.json'
```

### Response

```
{
"name": "-M_MjzMUG9s7CKcXePMn"
}
```

## Update destination

### Request

```
  curl -X PUT -d '{
  "country": "Japan",
  "description": "Ipsum corporis vitae totam quisquam, unde quasi.",
  "imageUrl": "https://images.unsplash.com/photo-1611401138000-237b6d8d746d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "name": "Tokyo",
  "type": "city"
  }' 'https://devschool-2020.firebaseio.com/ana/places/placeId.json'
```

### Response

```
{
"country": "Japan",
  "description": "Ipsum corporis vitae totam quisquam, unde quasi.",
  "imageUrl": "https://images.unsplash.com/photo-1611401138000-237b6d8d746d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "name": "Tokyo",
  "type": "city"
}
```

## Delete certain destination

### Request

```
  curl -X DELETE \
'https://devschool-2020.firebaseio.com/ana/places/placeId.json'
```

### Response

```
null
```

## Delete all destionations

### Request

```
  curl -X DELETE \
'https://devschool-2020.firebaseio.com/ana/places.json'
```

### Response

```
null
```
