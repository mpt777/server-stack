import os
from django.http import FileResponse, HttpResponse
from django.shortcuts import get_object_or_404, render

# Create your views here.
from django.shortcuts import render
from django.core.files.storage import FileSystemStorage

from media.models import Post
from utils.view.utils import superuser_required


@superuser_required
def serve_protected_document(request, file):
    print(file,"------------------------------------------")
    document = get_object_or_404(Post, file=f"private/{file}")

    # Split the elements of the path
    path, file_name = os.path.split(file)

    # response = FileResponse(document.file,)
    # response["Content-Disposition"] = "attachment; filename=" + file_name

    response = HttpResponse(status=200)
    response['Content-Type'] = ''
    # response["Content-Disposition"] = "attachment; filename=" + file_name
    # nginx uses this path to serve the file
    print(file)
    response["X-Accel-Redirect"] = f"/media/private/{file}" 

    return response


def image_upload(request):
    if request.method == "POST" and request.FILES["image_file"]:
        image_file = request.FILES["image_file"]
        fs = FileSystemStorage()
        filename = fs.save(image_file.name, image_file)
        image_url = fs.url(filename)
        print(image_url)
        return render(request, "upload.html", {
            "image_url": image_url
        })
    return render(request, "upload.html")