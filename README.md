# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) DIY API — Homework

## **Deliverable**:

For our first MERN app mini project you will be building a personal blog (longterm feel free to use this for outcomes!). First, it's time to make your own API! 

Using what you have learned about Express, Express Routing, RESTful routing, CRUD operations, and Mongoose, use the Mongoose ODM to implement full CRUD functionality on a model (subject of your choosing).


## What is a MERN App? 
MERN is an acronym for an app that utilizes Mongo/Mongoose and Express for the backend (typically an API layer), and React/Node for the frontend. 

How we make it work: 
- we will build an express server that makes mongoose CRUD requests to a Mongo db. 
- we will build a React frontend that will make calls to our express API for any data. 

-----

## **Requirements**: 

1. The model you choose to use should have at least three fields, in addation to the default `_id` field. 

*Example:*

| column name | type |
|:-----------:|:----:|
| \_id | integer |
|name | string |
|title | integer |
|content | string |


2. Your API should be accessible via five routes: 

*Example:*

| Method | Action | URL | Functionality |
|--------|:------:|:---:|:--------------|
| GET | index | /blog | list all blog posts |
| POST | create | /blog | add a new blog post |
| GET | detail/show | /blog/:id | show one blog post |
| PUT | update | /blog/:id | update one blog post |
| DELETE | delete | /blog/:id | delete one blog post |

3. Although the above suggested theme for your **API** is **blogs**, if you would like make an API with a different theme you may do so. However, your API must include the five routes listed above if you choose to theme your API differently. 

-------

## **Steps to Achieve**

**You will need to:**
1. Fork and clone this repository!
2. Run `npm init` to start your node project. 
3. Create a `.gitignore` and add everything to ignore
4. Create your Express App
5. Add Mongoose functionality!

**Recommended Workflow:**
1. Stub out your routes. For the purposes of initial declaration, `res.send("test")` to make sure you're hitting them.
2. Link your model to your server.
3. Update your routes to "do something" and make the magic happen!

-------

