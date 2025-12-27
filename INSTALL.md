# 🚀 Installation — Aurora Nexus Emerald System

Bienvenue dans l’installation du système Aurora Nexus Emerald.

## 1. Prérequis
- Node.js 18+
- Python 3.10+
- Docker + Docker Compose
- Git

---

## 2. Installation Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
