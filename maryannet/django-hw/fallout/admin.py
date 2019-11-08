class Fallout(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    image = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.title} - {self.author}'