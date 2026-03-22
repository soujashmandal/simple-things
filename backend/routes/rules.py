from fastapi import APIRouter

router = APIRouter()

rules = []


@router.get("/rules")
def get_rules():
    return rules


@router.post("/rules")
def add_rule(rule: dict):
    rules.append(rule)
    return {"status": "saved"}