import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
        {
         front: "The 3 or 4 main pillars of OOP are:",
         back: "Easy as P.I.E (Polymorphism, Inheritance, and Encapsulation)" 
        },
        {
         front: "What is an object?",
         back: "An instance of a class" 
        },
        {
         front: "Give some examples of Polymorphism:",
         back: "1.)Overload method so that it performs different action depending on number/type of parameters 2.)Override method in a derived (child) class with same name and method signature. 3.)Interface/Derived Types, implement class methods differently" 
        },
        {
         front: "Define Inheritance:",
         back: "Inheritance is the mechanism of basing an object or class upon another object or class.  \"Is a\" relationship.  Derived classes inherit Base classes." 
        },
        {
         front: "Define Encapsulation:",
         back: "Encapuslation refers to the bundling of data with the methods that operate on that data.  It's used to hide values or state of an object inside a class, preventing unauthories direct access.  Getters/Setters" 
        },
        {
          front:  "What is an Abstract Class?",
          back:  "A base class that cannot create an instance.  These are the only classes that can have abstract methods."
        },
        {
          front: "What is an Abstract Method?",
          back: "A method that must be overwritten" 
         },
         {
          front: "What is a static method?",
          back: "A method that can be run without an instance of the class" 
         },
         {
          front: "What does SQL stand for?",
          back: "Structured Query Language" 
         },
         {
          front: "What is the order for SQL statements?",
          back: "SELECT FROM JOIN WHERE GROUP/ORDER BY" 
         },
         {
          front: "What are the characteristics of Primary Keys(PK)?",
          back: "Unique/Not NULL/Can't change/Indexed" 
         },
         {
          front: "What are the characteristics of Foreign Keys(FK)?",
          back: "Points to PK in another table/Duplicates are allowed/NULL is allowed/Not indexed" 
         },
         {
          front: "What do you call a Primary Key made from multiple columns?",
          back: "Composite Key" 
         },
         {
          front: "What does CRUD stand for?",
          back: "Create Read Update and Delete" 
         },
         {
          front: "What are the requirements for First Normal Form?",
          back: "All data is a uniquely identifiable row and there are no duplicate columns" 
         },
         {
          front: "What are the requirements for Second Normal Form?",
          back: "All data in the row depends on the Primary Key as well as it is in first normal form" 
         },
         {
          front: "What are the requirements for third normal form?",
          back: "No transitive dependency for non-prime attributes as well as it is in second normal form" 
         },
         {
          front: "What does REST stand for?",
          back: "Representational State Transfer" 
         },
         {
          front: "What are the HTTP methods?",
          back: "GET, DELETE, POST, PUT" 
         },
         {
          front: "What does API stand for?",
          back: "Application Programming Interface" 
         },
         {
          front: "What does JWT stand for?",
          back: "JSON Web Token" 
         },
         {
          front: "What does JSON stand for?",
          back: "JavaScript Object Notation" 
         },
         {
          front: "What does DNS stand for?",
          back: "Domain Name Service" 
         },
         {
          front: "What is Joe's Favorite Color(and can you spell it)?",
          back: "Chartreuse.  I can.  Can Joe?" 
         },
         {
          front: "How is JavaScript Typed?",
          back: "Loosely/Weakly" 
         },
         {
          front: "What does loosely/weakly typed mean?",
          back: "Variables are not required to be defined. (variable = 'this string' vs string variable = 1)" 
         },
         {
          front: "What does DOM stand for?",
          back: "Document Object Model" 
         },
         {
          front: "What is the best way to select an element by ID in JS?",
          back: "getElementById" 
         },
         {
          front: "How do you get an element in JS if it doesn't have a class or id?",
          back: "querySelector" 
         },
         {
          front: "What's the difference between primitive/value types and reference types?",
          back: "Primitive types are basic forms of data(int, double, bool, char) while reference types are instatiable class types as well as arrays(including strings).  Reference variable store addresses to locations in memory where the data is stored." 
         },

         
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
