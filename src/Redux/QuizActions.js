






fetch('http://localhost:3000/quizzes', {method:'POST', headers: {'Content-Type': 'application/json', Authorization: `bearer ${localStorage.token}`},
body:JSON.stringify({topic: 'bees', name:'fetch quiz'})}).then(r=>r.json()).then(console.log)
