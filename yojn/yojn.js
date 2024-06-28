const yojn = require("yojnapp");
const getinit = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      userId: "naveen",
      orgId: "diaratech",
      authKey: "28075038-f81e-485c-ab60-f3acfaed52d8",
      app: "ibgpt",
    }),
  };
  const runyojnConfig = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      userPrompt: "what is css?",
      userId: "kl",
      consent: "1",
      app: "ibgpt",
      groupChatId: "grp1",
    }),
  };
  const res = await yojn.init("https://api.ibgpt.io/initializeYojn", config);
  console.log(res);
  const resp = await yojn.complete(
    "https://api.ibgpt.io/runYojn",
    runyojnConfig
  );
  console.log("Result from yojn.complete:", resp);
};

getinit();
