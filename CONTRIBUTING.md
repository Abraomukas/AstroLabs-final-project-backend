# How to contribute

## Feature development lifecycle

In order to contribute to this project, all you need to do is follow these steps:

0. ### **Clone the repository**

    The very first step is to get the code, of course. Run this command and you will have everything we have worked on in no time:

    ```
    git clone <repository-URL>
    ```

1. ### **Create your own branch**

    To make sure you have the latest version of the code, run this command:

    ```
    git pull
    ```

    Now you are ready to mess around on your own! First and foremost, create a branch using this command:

    ```
    git checkout -b "<meaningful-branch-name>"
    ```

    When it comes to naming your branch, bare in mind it should be meaningful enough as for your teammates to know what you are up to. Read the **Coding conventions** below for some guidelines.
    
    After creating your branch, run the following command to let _Git_ know there is a new branch:

    ```
    git push
    ```

    You will see this:

    ```
    $ git push
    fatal: The current branch <meaningful-branch-name> has no upstream branch.
    To push the current branch and set the remote as upstream, use
        
        git push --set-upstream origin <meaningful-branch-name>
    ```

    Once you run the suggested command, your branch will be part of the repository. You are good to go!

2. ### **Commit your changes**

    Once you finish coding your part, follow these 3 steps:

    1. Add the files you have worked on to your Git stash:

        ```
        git add <file> <file> ... <file>
        ```
    
    2. Commit your changes:

        ```
        git commit -m "<meaningful message>"
        ```
    3. Push your changes:

        ```
        git push
        ```

3. ### **Open a pull request (PR)**

    This is the last step of your journey! Follow these steps and you will be soon ready to work on something else:

    1. Go to the repository's page on [GitHub](https://github.com/Abraomukas/astrolabs-final-project-backend)

    2. Click on **Pull requests**

    3. Click the **New pull request** green button

    4. Click on the **compare: master** field and select your branch

    5. At the bottom of the summary of your modifications, you can add a **title** and a **description** for your PR

    6. Click on the **Create pull request** green button at the top

    7. <img src="bender-dancing.gif" alt="Bender dancing" width="100"/>



4. ### **Treat yo self and get back to step 1** 

## Coding conventions

- ALWAYS put spaces after list items and method parameters ([1, 2, 3], not [1,2,3]), around operators (x += 1, not x+=1), and around hash arrows.

- Consider the people who will read your code, and make it look nice for them.

- NEVER use numbers when it comes to naming branches, methods, variables, classes, ... (). Pretty much everything.

- Make sure all your commits are atomic (one feature per commit).

- Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:
    ```
    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

    ```
