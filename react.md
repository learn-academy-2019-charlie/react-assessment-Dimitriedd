# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
    Flase
- React is a modern, efficient answer to complex UI applications
    True
- React is a full stack framework for modern web applications 
    False
- React is a flexible library that plays the role of V in an MVC framework
    True

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
    Smart components hold states and methods to deal with the states and usually call on dumb compenets and pass props to them so they can display the information from the props.
        
    Dumb compenets do not hold states or methods usually they will have props passed to them so they can output them in html and get called buy smart compenets.
 
 //Googled Answer
    Smart components will have a constructor to define states and a render method
    Dumb compenets will only have the render method to out put information given to it
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
    Yarn adds a package to the code and updates the package.json file
 
 //Googled Answer
 
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {                                                             ### NOT INHERITING FROM REACT COMPONENT
      constructor(props){                           
        super(props)
        this.state = {
          recipes:                                                              ### OBJECTS KEYS NOT IN []
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
      
        }
      }

      render() {                                                                ### STATES ARE NOT DECONSTRUCTED
    
        return (
    
          let recipes = this.state.recipes.map(function(recipe){                ### JSX NOT IN {} SO IT WILL BE AN ERROR
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
    
          <ul>
            {recipes}
          </ul>                                                                 ### ENTIRE HTML IS NOT IN A HTML ELEMENT AND YOU CAN ONLY RETURN ONE HTML ELEMENT
        );
      }
    }

    export default Recipes;
    
    ##FIXED##
    
    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:[ 
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
            ]
      
        }
      }

      render() {
        let { recipes } = this.state
        return (
        <div>    
          {let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name[0]}>{recipe.name[1]}</li>
            )
          })}
    
          <ul>
            {recipes}
          </ul>
        </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
    there is a number, button, and image
 
 //Googled Answer
    There are many different html input types over 20
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer
    A state is a varible that can not be changed but It can be set 
    and effects all instances of that state when set.
 
 //Googled Answer
 
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
    A state is made in the constructor method and is made in the start of a compenet
    a prop is varible that was passed through to a compenet when it was called you cannot change a prop but you can set a state
 
 //Googled Answer
 
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

        When we were coding tic-tac-toe the hardest thing was not the logic.
    We had trouble figuring out where to start and what states we need to make the logic.
    It was hard sometimes to get everyone on the same page and also to find a simple bug that breaks the entire code.
    It was hard to call muiltiple compenets with then .map method then giving each one a unique id.
    The hardest thing was probably to get everyone to agree to a way to build out the app.
    
    I think react is very powerful do to the fact that you can update states fluidly so the update without having to refresh the page.
        