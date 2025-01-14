from django.urls import path
from .views import SocialDetailsView, CreateSocialDetailsView, DeleteSocialDetailsView

urlpatterns = [
     path('social-details/class/', SocialDetailsView.as_view(), name='social-details-class'),
    path('social-details/create/', CreateSocialDetailsView.as_view(), name='create-social-details'),
    path('social-details/delete/', DeleteSocialDetailsView.as_view(), name='delete-social-details'),
]