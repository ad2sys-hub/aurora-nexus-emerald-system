from fastapi import APIRouter
from pydantic import BaseModel
from app.db_mongo import diagnostics_collection

router = APIRouter()

class Diagnostic(BaseModel):
    nom: str
    prenom: str
    email: str
    appareil: str
    probleme: str
    date: str

@router.post("/")
async def create_diagnostic(diagnostic: Diagnostic):
    result = await diagnostics_collection.insert_one(diagnostic.dict())
    return {
        "message": "Diagnostic enregistré",
        "id": str(result.inserted_id)
    }
