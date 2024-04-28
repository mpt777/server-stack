import datetime
from django.db import models

# Create your models here.

def handle_uploaded_file(instance, filename):
    _datetime = datetime.now()
    datetime_str = _datetime.strftime("%Y-%m-%d-%H-%M-%S")
    return f"upload/{datetime_str}-{filename}"
    

class Post(models.Model):
    name = models.Charfield(max_length=255)
    description = models.Textfield(blank=True, null=True)
    video = models.FileField(upload_to=handle_uploaded_file)
