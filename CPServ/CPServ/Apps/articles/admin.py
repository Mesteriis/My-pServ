from django.contrib import admin

from .models import Article, Source, Tag

admin.site.register(Article)
admin.site.register(Source)
admin.site.register(Tag)