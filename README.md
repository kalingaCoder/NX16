# StoreGroup
npx create-nx-workspace@latest store-group --preset=ts
npm install -D @nx/react
nx g @nx/react:app sg --directory=apps --style=scss

Executing task: npx nx generate @nx/react:library sg-utilities --unitTestRunner=jest --bundler=vite --directory=./utilities --importPath=@mesg/sg-utilities --publishable --no-interactive 

https://nx.dev/packages/express
npx nx g @nx/express:app server --frontendProject sg


npx nx generate @nx/express:application api --directory=./ --babelJest --frontendProject=sg --no-interactive "# NX16" 
