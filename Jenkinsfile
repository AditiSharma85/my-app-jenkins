pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'bash ./jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'bash ./jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh 'bash ./jenkins/scripts/kill.sh' 
            }
        }
    }
}