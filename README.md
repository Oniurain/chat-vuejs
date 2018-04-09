# chat-vuejs
A chat developed in hiring process, using typescript and vueJs

## structure
* src
* assets
* components
* dataservices
* interfaces
* router
* store

## components
List of components :)
* Chat.vue => the chat
* Message.vue => component for display a message
* LoginPage.vue => the login page
* NotFound.vue => 404

## dataservices
Here we return fake data but we can call any api. Not enought time to do server side that's why it's only fake and static data

## interfaces
Use for strongly type objects

## router
vue router

## store
store (vuex). Keep state & call to dataservice.

## How it works
The router load the good component depending to the url.
When the component is loaded, the *created* method is call. This method call the right store in order to load necessary data.
I use computed in order to wrap somes store data usage in order to avoid direct call to store in the template

## Development process
First I try to find a boilerplate in order to easily start a simple project with vue+typescript. Not easy :p
After that I start the login page, with a userStore for loading data.
Next was the messages, so I had to change my store in order to use modules.
Here the architecture was stable so I could easily add feature, like the connected users list, or the pagination for messages.
However I was running out of time so I couln't focus on UI/UX. The architecture was stable too late, so I don't have any unit test :(
I don't check how many time I use for this project, but was a good experience, learning vuejs.
Tips: if you want to use typescript, take time in order to look type for vuex, it's so painful without... Or wrap vuex call for better maintainability


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
