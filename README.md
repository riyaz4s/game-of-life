# John Conway's Game of Life

[Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) simulation built using React hooks and esbuild.

#### Demo

<p align="center">
  <img alt="Screenshot" src='https://user-images.githubusercontent.com/44619190/119892889-517b6280-bf58-11eb-8896-b1e1fc351e32.gif'>
</p>

### Rules

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


### How to Run

```shell script
$ git clone https://github.com/riyaz4s/react-game-of-life-hooks.git
$ cd react-game-of-life-hooks
$ npm run build
$ npm run start
```

Start playing from http://localhost:4001/gol
### How to Play

* Toggle between life and death by clicking the cell
* Start generation building by using the START button.
