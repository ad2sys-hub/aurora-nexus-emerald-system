from pydantic import BaseModel
from typing import Optional

class TicketSchema(BaseModel):
    title: str
    description: Optional[str] = None
    status: Optional[str] = "Nouveau"

    class Config:
        orm_mode = True
