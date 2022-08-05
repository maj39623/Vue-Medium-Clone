From the app vue that is the starting point - From there you can have a h1 "title"
○ Then a router view

The router view is set up through Views, which is like pages directed by the path

You set this up under router.index.js - The name is the router link - The component is the file name

Vuex: View ---> Actions ---> State ---> View

    - Mutations are synchronous actions which change the state
    - Getters is used when you want to apply logic when getting some data from State
    	○ Think of getters as computed properties for stores

You can create Vuex modules and it works the same way as if you did everything globally

Actions are asynchronous mutations - Usually code that works with the backend

In Vuex all mutations and actions are global

Watch is similar to computed properties - Triggers something if something is changed

A good example of $emit is the communication between CreateArticle.vue and ArticleFrom.vue

You can split an array of strings
This.tagList.split(' ')
