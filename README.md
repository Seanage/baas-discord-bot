# baas-discord-bot

```
 /$$                                                                                                  
| $$                                                                                                  
| $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$                                                              
| $$__  $$ |____  $$ |____  $$ /$$_____/                                                              
| $$  \ $$  /$$$$$$$  /$$$$$$$|  $$$$$$                                                               
| $$  | $$ /$$__  $$ /$$__  $$ \____  $$                                                              
| $$$$$$$/|  $$$$$$$|  $$$$$$$ /$$$$$$$/                                                              
|_______/  \_______/ \_______/|_______/                                                               
       /$$ /$$                                               /$$         /$$                   /$$    
      | $$|__/                                              | $$        | $$                  | $$    
  /$$$$$$$ /$$  /$$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$        | $$$$$$$   /$$$$$$  /$$$$$$  
 /$$__  $$| $$ /$$_____/ /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$ /$$$$$$| $$__  $$ /$$__  $$|_  $$_/  
| $$  | $$| $$|  $$$$$$ | $$      | $$  \ $$| $$  \__/| $$  | $$|______/| $$  \ $$| $$  \ $$  | $$    
| $$  | $$| $$ \____  $$| $$      | $$  | $$| $$      | $$  | $$        | $$  | $$| $$  | $$  | $$ /$$
|  $$$$$$$| $$ /$$$$$$$/|  $$$$$$$|  $$$$$$/| $$      |  $$$$$$$        | $$$$$$$/|  $$$$$$/  |  $$$$/
 \_______/|__/|_______/  \_______/ \______/ |__/       \_______/        |_______/  \______/    \___/  
```                                                                                                    
                                                                                                                                                                     
## Adding rules

To add your own rules do the following below. follow the pattern already present and don't be a chief.
1. create a ts file in the src/bot-rules folder.   
2. Update the index.ts to include your bot. example syntax to add in the index.ts file as shown below. 

```export {default as bob} from './bob-rules';```

    Note, the member name exported really isn't important as long as it isn't identical to other ones present.

3. Create unit tests to confirm the behaviors of your rules. 

You should have enough examples from the other bots to figure it all out.  god speed. 
