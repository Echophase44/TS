## Complier Notes

- tsc app.ts --watch // or tsc app.ts -w // to put the file in watch mode - it'll comiple on saved changes.

- tsc --init // creates a tsconfig.json file

- tsc // Then you can run this command and it'll compile all ts files.
- tsc -w // Or to put all ts files in watch mode.

## Default Lib Settings in the tsconfig.json

- lib ['dom', 'es6', 'dom.iterable', 'scripthost']

- sourceMap //helps with debugging in the browser

- outDir: "./dist" // tells the compiler where to output the comipled .js files // putting "./dist" will put them into the dist folder
- rootDir: "./src" //tells the compiler to only look at this folder for .ts files and keep the file/folder structure and duplicate it into the dist folder

## Debugging

- TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
