FROM python:3.10

WORKDIR /lst-hr/backend

COPY requirements.txt ./

RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

COPY ./app /lst-hr/backend/app

CMD ["python3.10", "-m", "app"]