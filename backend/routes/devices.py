from fastapi import APIRouter

router = APIRouter()

devices = [
    {"id": "1", "name": "Living Room Motion", "status": "active"},
    {"id": "2", "name": "Bedroom Light", "status": "off"},
]


@router.get("/devices")
def get_devices():
    return devices


@router.post("/devices")
def add_device(device: dict):
    devices.append(device)
    return {"status": "added"}