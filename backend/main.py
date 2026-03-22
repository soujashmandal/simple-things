from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import devices, rules, events

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow React
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(devices.router)
app.include_router(rules.router)
app.include_router(events.router)