"""update_phone_variety

Revision ID: 002
Revises: 001
Create Date: 2023-12-17 07:56:41.605756

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '002'
down_revision: Union[str, None] = '001'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'phone',
               existing_type=sa.VARCHAR(length=12),
               type_=sa.String(length=50),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'phone',
               existing_type=sa.String(length=50),
               type_=sa.VARCHAR(length=12),
               existing_nullable=False)
    # ### end Alembic commands ###
