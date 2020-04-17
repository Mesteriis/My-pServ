import datetime
from django.db import models

from django.utils import timezone

class Tag(models.Model):
	name_tag = models.CharField('Тег', max_length = 200)

class Article(models.Model):
    article_title = models.CharField('Название статьи', max_length = 200)
    article_text = models.TextField('Текст статьи')
    pub_date = models.DateTimeField('Дата')
    tag = models.ForeignKey(Tag, on_delete = models.DO_NOTHING)

    def __str__(self):
    	return self.article_title

    def was_published_recently(self):
    	return self.pub_date >= (timezone.now() - datetime.timedelta(days = 31))
# разобратся с Meta
#    class Meta:
#    	verbose_name = 'Статья'
#    	verbose_name_plual = 'Статьи'

class Source(models.Model):
	Article = models.ForeignKey(Article, on_delete = models.DO_NOTHING)
	source_name = models.CharField('Название источника', max_length = 200)
	source_path = models.TextField('URL') 