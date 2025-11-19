pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ilyas111111111/PIPLINE2-CI_CD-.git'
            }
        }

        stage('Test') {
            steps {
                script {
                    echo "Running simple test..."
                    sh 'test -f index.html'
                    echo "Test OK: index.html exists!"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t html-project .'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker run -d -p 8094:80 html-project'
                }
            }
        }
    }
}
