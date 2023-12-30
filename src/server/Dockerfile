FROM python:latest

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 6969

CMD ["python3", "app.py"]
