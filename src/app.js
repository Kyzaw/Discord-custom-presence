const clientId = "1239501992989163620";
const DiscordRPC = require("discord-rpc");
const rpc = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!rpc) return;

  await rpc.setActivity({
    details: "The Journey of a thousand miles,",
    state: "begins with one step.",
    startTimestamp: Math.floor(Date.now() - (66 * 3600 + 66 * 60 + 66) * 1000),
    largeImageKey:
      "https://i.pinimg.com/originals/d5/05/c5/d505c5d7f515e3373baf91ff89339816.gif",
    largeImageText: "The Journey of a thousand miles, begins with one step.",
    smallImageKey:
      "https://i.pinimg.com/originals/d5/05/c5/d505c5d7f515e3373baf91ff89339816.gif",
    smallImageText: "The Journey of a thousand miles, begins with one step.",
    buttons: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/rizkytriii_/",
      },
      {
        label: "GitHub",
        url: "https://github.com/Kyzaw",
      },
    ],
  });
}

rpc.on("ready", () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 172800000);
});

rpc.login({ clientId }).catch(console.error);
