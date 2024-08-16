pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-node-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/BamaOlga/Node.js.git'
            }
        }

   stage('Build') {
    steps {
        sh 'ls -al ./my-node-app' // Adjust the path if needed
        sh 'docker build -t my-node-app:latest ./my-node-app'
    }
}




        stage('Unit Test') {
    steps {
        sh 'npm test'
    }
}


   stage('Integration Test') {
    steps {
        sh 'ls -al /var/lib/jenkins/workspace/Web\\ app/app'
        sh 'npm test'
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
