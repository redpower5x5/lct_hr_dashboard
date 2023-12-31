"""init_data

Revision ID: 001
Revises: 
Create Date: 2023-12-17 07:33:09.283629

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '001'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('department',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('period',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('start_date', sa.DateTime(), nullable=False),
    sa.Column('end_date', sa.DateTime(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('employee',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('phone', sa.String(length=12), nullable=False),
    sa.Column('sex', sa.String(length=10), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('department_id', sa.Integer(), nullable=True),
    sa.Column('avatar', sa.TEXT(), nullable=False),
    sa.Column('quit_probability', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['department_id'], ['department.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('phone', sa.String(length=12), nullable=False),
    sa.Column('hashed_password', sa.String(length=100), nullable=False),
    sa.Column('role', sa.Enum('HR', 'admin', 'head_of_department', name='role'), nullable=True),
    sa.Column('department_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['department_id'], ['department.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('employee_metrica',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('employee_id', sa.Integer(), nullable=True),
    sa.Column('number_of_answered_emails', sa.Integer(), nullable=False),
    sa.Column('number_of_sent_emails', sa.Integer(), nullable=False),
    sa.Column('number_of_received_emails', sa.Integer(), nullable=False),
    sa.Column('mean_number_of_recipients_in_one_email_for_user', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('number_of_emails_read_after_x_minutes', sa.Integer(), nullable=False),
    sa.Column('mean_number_of_days_between_receiving_emails_and_read', sa.Integer(), nullable=False),
    sa.Column('number_of_sent_emails_outside_of_working_hours', sa.Integer(), nullable=False),
    sa.Column('received_and_sent_emails_proportion_for_user', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('mean_number_of_not_answered_questions_in_email', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('mean_length_of_user_emails', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('mean_answering_time_for_user', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('number_of_passed_corporative_tests_or_courses_for_user', sa.Integer(), nullable=False),
    sa.Column('number_of_unique_recipients_of_emails_for_user', sa.Integer(), nullable=False),
    sa.Column('number_of_unique_departments_in_emails_for_user', sa.Integer(), nullable=False),
    sa.Column('toxcity_in_sent_emails_for_user', sa.Enum('LOW', 'MEDIUM', 'HIGH', name='toxcicitylevel'), nullable=True),
    sa.Column('toxcity_in_received_emails_for_user', sa.Enum('LOW', 'MEDIUM', 'HIGH', name='toxcicitylevel'), nullable=True),
    sa.Column('emotions_in_sent_emails_for_user', sa.Enum('POSITIVE', 'NEGATIVE', 'NEUTRAL', name='emotion'), nullable=True),
    sa.Column('emotions_in_received_emails_for_user', sa.Enum('POSITIVE', 'NEGATIVE', 'NEUTRAL', name='emotion'), nullable=True),
    sa.Column('salary', sa.Integer(), nullable=False),
    sa.Column('high_priority_emails_reply_delay', sa.Integer(), nullable=False),
    sa.Column('medium_priority_emails_reply_delay', sa.Integer(), nullable=False),
    sa.Column('low_priority_emails_reply_delay', sa.Integer(), nullable=False),
    sa.Column('period_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['employee_id'], ['employee.id'], ),
    sa.ForeignKeyConstraint(['period_id'], ['period.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('employee_metrica')
    op.drop_table('user')
    op.drop_table('employee')
    op.drop_table('period')
    op.drop_table('department')
    # ### end Alembic commands ###
