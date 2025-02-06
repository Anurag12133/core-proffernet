from rest_framework import generics, permissions, status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Project
from rest_framework.views import APIView
from .serializers import ProjectSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Project, Contribution
from .serializers import ProjectSerializer, ContributionSerializer

class ProjectListCreateView(generics.ListCreateAPIView):
   
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]  

    def get_queryset(self):
        # Restrict projects to the logged-in user
        return Project.objects.filter(user=self.request.user)

class ProjectDetailsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data, status=200)


class UserProjectsView(generics.ListAPIView):
    
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'status': 'success',
            'count': queryset.count(),
            'projects': serializer.data
        })

class ProjectDetailsByTitleView(APIView):

    def get(self, request, *args, **kwargs):
        project_title = kwargs.get('title') 
        try:
            project = Project.objects.get(title=project_title)
        except Project.DoesNotExist:
            return Response({'error': 'Project not found'}, status=404)

        serializer = ProjectSerializer(project)
        return Response(serializer.data, status=200)

class ContributeToProjectView(APIView):

    def post(self, request, *args, **kwargs):
        project_title = request.data.get('project_title')

        if not project_title:
            return Response({'error': 'Project title is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            project = Project.objects.get(title=project_title)
        except Project.DoesNotExist:
            return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)

        if Contribution.objects.filter(user=request.user, project=project).exists():
            return Response({'message': 'You have already contributed to this project.'}, status=status.HTTP_400_BAD_REQUEST)

        contribution = Contribution.objects.create(user=request.user, project=project)

        return Response({'message': 'Successfully added contribution', 'data': ContributionSerializer(contribution).data}, status=status.HTTP_201_CREATED)

