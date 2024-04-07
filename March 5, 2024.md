## Code reserve
A code reserve is a functionality that git gives us when whe don't want to add a change into a commit for a time.
We can appart all the changes we need from the timeline, then we can go back, correct, etc. 'till we need the changes back in the timeline.

### git stash
| Command | Description |
| - | - |
| push | With this. we can add the current changes to a  |
| pop | |
| list | |
| show | |

### git diff


## Branches
Until now, we have just created a timeline for our repository:

main: Commit 1 -> Commit 2 -> Commit 3

The processes where we integrate the changes uptop are called **CI** (Continuous Integration).

When we are in the production branch, we usually do *hot-fixes*, for beta we do *fixes* and if the change is a *feature* it is done in a branche that is derived from staging.


> ### git branch
> Shows all the branches in the current repositorio.

It is usually to delete the branches when they are not used anymore


# Docker
Docker resolves the problem of distribution.

Docker captures the ambient of code and pack it into a container. 

Diference bewteen Dockerización and virtualización
The virtualization control the resources and mount over it an Operative System.
The dockerization gives the needed resources for the aplication to work