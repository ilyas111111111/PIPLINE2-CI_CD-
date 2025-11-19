pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ilyas111111111/PIPLINE2-CI_CD-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test || true'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t devops-node .'
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    // Stop old container if exists
                    sh 'docker stop node-app || true'
                    sh 'docker rm node-app || true'

                    // Run new one on port 8094
                    sh 'docker run -d -p 8094:3000 --name node-app devops-node'
                }
            }
        }
    }
}
