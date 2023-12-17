from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import CursorResult

from sqlalchemy.orm import Session

from app.config import log
from app.schemas import response_schemas, request_schemas
from app.core.dependencies import get_db
from app.core import crud
from app.config import settings
from app.utils.token import get_current_active_user, get_current_active_admin

from fastapi_cache.decorator import cache

import time

router = APIRouter(
    prefix="/metrics",
    tags=["mterics"],
)

@router.get("/employee/{id}", response_model=response_schemas.EmployeeMetricaList)
@cache(expire=settings.CACHE_EXPIRE)
async def get_employee_metrics(
    id: int,
    db: Session = Depends(get_db),
    current_user: response_schemas.User = Depends(get_current_active_user),
):
    """
    Get employee metrics
    """
    metrics = crud.get_employee_metrics(db=db, id=id, user=current_user)

    if metrics is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No metrics found",
        )

    return metrics