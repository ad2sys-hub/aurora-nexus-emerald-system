from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.diagnostics import router as diagnostics_router
from app.api.tickets import router as tickets_router

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route racine
@app.get("/")
def read_root():
    return {"message": "Aurora Nexus API is running"}

# Inclusion des routers
app.include_router(diagnostics_router)
app.include_router(tickets_router)
