async function postJson(path, body) {
  try {
    const res = await fetch(API_BASE + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? {'Authorization':'Bearer ' + token} : {})
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error('API error', err);
    return { error: err.message || 'Network error' };
  }
}
