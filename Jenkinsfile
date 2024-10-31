pipeline {
    agent any
    
    environment {
        NODE_VERSION = '14' // or the version you're using
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                script {
                    // Install Node.js and npm on Jenkins if not already available
                    if (isUnix()) {
                        bat "nvm install ${NODE_VERSION}"
                        bat "nvm use ${NODE_VERSION}"
                    }
                    bat 'npm install'
                }
            }
        }
        
        stage('Build Application') {
            steps {
                echo 'Building application...'
                bat 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deployment steps here, for example:
                // Copy files to server or deploy to a hosting service
                // e.g., `scp -r build/* user@server:/path/to/deploy`
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded.'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
