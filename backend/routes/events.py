from fastapi import APIRouter, WebSocket
import asyncio
import random

router = APIRouter()


@router.websocket("/ws/events")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:
        await asyncio.sleep(2)

        event = {
            "type": "motion.detected",
            "source": "simulator.living_room",
        }

        await websocket.send_json(event)