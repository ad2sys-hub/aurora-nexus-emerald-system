from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/diagnostics",
    tags=["Diagnostics"]
)

class Diagnostic(BaseModel):
    device: str
    issue: str
    urgency: str

@router.post("/")
def create_diagnostic(diagnostic: Diagnostic):
    return {"message": "Diagnostic reçu", "data": diagnostic}
