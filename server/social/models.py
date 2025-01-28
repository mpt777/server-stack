from functools import cached_property
from django.db import models
import random

# Create your models here.
class SecretSanta(models.Model):
  name = models.CharField(max_length=255)
  seed = models.PositiveBigIntegerField(default=0)

  def __str__(self):
    return self.name
  
  def pairs(self) -> dict:
    random.seed(self.seed)
    shuffled = list(self.rows.all())[:]
    random.shuffle(shuffled)

    pairs = {giver: receiver for giver, receiver in zip(shuffled, shuffled[1:] + shuffled[:1])}
    return pairs
  
  @cached_property
  def pairs_str(self) -> dict:
    return {k.name: v.name for k, v in self.pairs().items()}


class SecretSantaRow(models.Model):
  name = models.CharField(max_length=255)
  secret_santa = models.ForeignKey("SecretSanta", related_name="rows", on_delete=models.CASCADE)

  def __str__(self):
    return self.name