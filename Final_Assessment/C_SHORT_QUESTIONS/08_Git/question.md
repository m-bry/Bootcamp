## Git Question A:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?
```
//Local Branch
git branch -a 
   //finding local git branch to delete

git branch -d local-branch
    // delete the local branch

//Remote Branch
git branch -a 
    //find remote branch to delete

git push origin -d remote-branch
    //delete the specified remote branch 
```
## Git Question B: 

You made a mistake in committing your last set of changes. How would you fix it?
```
git restore -p
```

Bonus question:

Would your approach change if you pushed the erroneous commit, that others may have pulled from and based their work upon?