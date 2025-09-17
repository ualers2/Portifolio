import subprocess
import os

os.chdir(os.path.join(os.path.dirname(__file__)))
os.environ["PATH"] += r";C:\Program Files\Docker\Docker\resources\bin"

def executar_comando(comando):
    subprocess.run(comando, shell=True)

 
executar_comando("docker-compose up --build -d landing api")

