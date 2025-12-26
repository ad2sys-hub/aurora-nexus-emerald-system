from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(
    prefix="/tickets",
    tags=["Tickets"]
)

# -----------------------------
# Schéma Pydantic
# -----------------------------
class Ticket(BaseModel):
    title: str
    description: str | None = None
    status: str = "Nouveau"


# -----------------------------
# Base temporaire (à remplacer par DB)
# -----------------------------
fake_db: List[Ticket] = []


# -----------------------------
# Routes API
# -----------------------------

@router.get("/")
def get_tickets():
    return {"tickets": fake_db}


@router.post("/")
def create_ticket(ticket: Ticket):
    fake_db.append(ticket)
    return {"message": "Ticket créé avec succès", "ticket": ticket}
