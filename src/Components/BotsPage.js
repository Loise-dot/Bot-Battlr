import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botsArmy, setBotsArmy] = useState([]);

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} setBotsArmy={setBotsArmy}/>
      <BotCollection bots={bots} setBots={setBots} botsArmy={botsArmy} setBotsArmy={setBotsArmy}/>
    </div>
  )
}

export default BotsPage;
