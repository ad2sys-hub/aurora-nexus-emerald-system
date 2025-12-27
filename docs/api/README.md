# 📘 Aurora Nexus Emerald System — API Documentation
# FR / EN — Sponsor‑Ready Edition

## 🔗 Base URL
http://localhost:8000

---

## 🟦 1. GET `/`
Retourne l’état de l’API.

### Response
```json
{
  "message": "Aurora Nexus API is running"
}

##🟩 2. Tickets API
➤ GET /tickets/
Liste tous les tickets.

➤ POST /tickets/
Créer un ticket.

### Body
```json
{
  "title": "Diagnostic PC",
  "description": "Écran noir",
  "status": "Nouveau"
}

###🟧 3. Diagnostics API
➤ POST /diagnostics/
Créer un diagnostic technique.

### Body
```json
{
  "device": "PC portable",
  "issue": "Ne démarre plus",
  "urgency": "Haute"
}

#### 🟪 4. Health Check
GET /docs
GET /redoc
