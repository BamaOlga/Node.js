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
        script {
            def dockerPath = "/usr/bin/docker" // Update this path based on your environment
            sh "${dockerPath} build -t my-node-app:latest ."
        }
    }
}


        stage('Unit Test') {
    steps {
        dir('app') {
            withEnv(['PATH+NODE=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin']) {
                sh 'npm test'
            }
        }
    }
}

   stage('Integration Test') {
    steps {
        sh 'ls -al'
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
