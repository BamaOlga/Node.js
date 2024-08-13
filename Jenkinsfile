pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-node-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image("${env.DOCKER_IMAGE}:latest").inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.image("${env.DOCKER_IMAGE}:latest").inside {
                        sh 'npm start &'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
