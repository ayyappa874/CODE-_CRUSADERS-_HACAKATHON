# CODE-_CRUSADERS-_HACAKATHON
Create a smart event planning web app that helps groups decide plans together with suggestions for movies, restaurants, and hangout spots based on preferences.
# PlanPal Event Planner v3

This ZIP contains a minimal implementation of PlanPal v3:
- Backend (Flask) in /backend
- Frontend (static) in /frontend

## Quick steps to run (local)
1. Backend:
   - cd backend
   - python -m venv venv && source venv/bin/activate   # (Windows: venv\Scripts\activate)
   - pip install -r requirements.txt
   - cp .env.sample .env   # then fill your keys
   - python app.py
2. Frontend:
   - cd frontend
   - python -m http.server 5500
   - open http://localhost:5500 in your browser

## API keys
- OPENAI_API_KEY: get from https://platform.openai.com
- HF_API_KEY (optional): get from https://huggingface.co/settings/tokens
- GOOGLE_PLACES_API_KEY (optional): enable Places API in Google Cloud Console and create key
- TMDB_API_KEY (optional): get from https://www.themoviedb.org/settings/api

## Notes
- The chatbot endpoint uses OpenAI if OPENAI_API_KEY is set, otherwise falls back to HF if HF key is set, otherwise uses a local canned reply.
- The sample .env contains placeholders to make it easy to fill.
- This is a starter scaffold — extend models, add authentication UX, and connect to third-party APIs for richer suggestions.
