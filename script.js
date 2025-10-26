const API_BASE = '/api';
let token = null;

async function registerDemoUser(){
  const res = await fetch(API_BASE + '/register', {
    method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({username: 'demo_user'})
  });
  const j = await res.json();
  token = j.token;
}

function appendMessage(text, cls='bot'){
  const m = document.createElement('div');
  m.className = 'bubble ' + cls;
  m.textContent = text;
  document.getElementById('messages').appendChild(m);
  document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}

document.getElementById('send').addEventListener('click', async ()=>{
  const input = document.getElementById('input');
  const mood = document.getElementById('mood').value;
  const text = input.value.trim();
  if(!text) return;
  appendMessage(text, 'user');
  input.value = '';
  const res = await fetch(API_BASE + '/chat', {
    method:'POST', headers:{'Content-Type':'application/json', 'Authorization': 'Bearer '+token},
    body: JSON.stringify({message: text, mood})
  });
  const j = await res.json();
  appendMessage(j.reply || 'No reply :(', 'bot');
});

// demo setup
(async ()=>{
  await registerDemoUser();
  appendMessage('Hello! I am PlanPal Bot 🤖 — try asking for suggestions or choose a mood.', 'bot');
})();
