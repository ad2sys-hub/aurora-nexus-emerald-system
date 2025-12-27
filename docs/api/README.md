# 📘 Aurora Nexus Emerald System — API Documentation
# FR / EN — Sponsor‑Ready Edition

## 🔗 Base URL
http://localhost:8000

---

## 🟦 1. GET `/`
Returns the API status.

### Response
```json
{
  "message": "Aurora Nexus API is running"
}

## 🟩 2. Tickets API
➤ GET /tickets/
Returns all registered tickets.

➤ POST /tickets/
Create a new ticket.

### Body
```json
{
  "title": "Laptop diagnostic",
  "description": "Black screen",
  "status": "New"
}
### Response
```json
{
  "message": "Ticket successfully created",
  "ticket": {
    "title": "Laptop diagnostic",
    "description": "Black screen",
    "status": "New"
  }
}

### 🟧 3. Diagnostics API
➤ POST /diagnostics/
Create a technical diagnostic.

### Body
```json
{
  "device": "Laptop",
  "issue": "Does not boot",
  "urgency": "High"
}

### Response
```json
{
  "message": "Diagnostic saved",
  "id": "65b1e3f8c9a..."
}

#### 🟪 4. Health Check
/docs — Swagger UI

/redoc — ReDoc UI
